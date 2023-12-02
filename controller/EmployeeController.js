const employeeModel = require("../models/EmployeeModel");
const encryptPassword = require("../util/PasswordEncrypt");
const tokenUtil = require("../util/TokenUtil");
const readDataFromExcel = require("../util/ReadDataFromExcel");
const multer = require("multer");
const path = require("path");

const getAllEmployees = async (req, res) => {
  const employees = await employeeModel.find();
  console.log(employees);

  if (employees && employees.length !== 0) {
    res.status(200).json({
      employees: employees,
      message: "success",
    });
  } else {
    res.status(200).json({
      employees: [],
      message: "No employee found",
    });
  }
};
const addEmployee = async (req, res) => {
  console.log("req body", req.body);
  //req.body

  const empData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    password: encryptPassword.encryptPassword(req.body.password),
  };

  const employee = new employeeModel(empData);
  try {
    const flag = await employee.save();
    if (flag) {
      res.status(200).json({
        employee: employee,
        message: "success",
      });
    } else {
      res.status(200).json({
        employee: {},
        message: "failed",
      });
    }
  } catch (err) {
    res.status(500).json({
      employee: {},
      message: err.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const flag = await employeeModel.findByIdAndDelete(id);
    console.log(flag);
    if (flag) {
      res.status(204).json({
        message: "success",
      });
    } else {
      res.status(200).json({
        message: "failed",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateEmployee = async (req, res) => {
  const id = req.params.id;
  const employeeBody = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  try {
    const flag = await employeeModel.findByIdAndUpdate(id, employeeBody);
    if (flag) {
      res.status(200).json({
        message: "success",
        employee: flag,
      });
    } else {
      res.status(200).json({
        message: "failed",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const flag = await employeeModel.findById(req.params.id);
    if (flag) {
      res.status(200).json({
        message: "success",
        employee: flag,
      });
    } else {
      res.status(404).json({
        message: "record not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const filterEmployee = async (req, res) => {
  console.log(req.query);
  const query = req.query;
  const data = await employeeModel.find({ ...query });
  if (data) {
    res.status(200).json({
      message: "success",
      data: data,
    });
  } else {
    res.status(404).json({
      message: "failed",
      data: [],
    });
  }
  console.log(query);
};

const loginEmployee = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  const employee = await employeeModel.findOne({ email: email });
  console.log("employee", employee);
  if (employee) {
    const flag = encryptPassword.comparePassword(password, employee.password);
    console.log(flag);
    if (flag) {
      const token = tokenUtil.generateToken(employee.toObject());
      console.log("token...", token);
      res.status(200).json({
        message: "Login success",
        data: token,
      });
    } else {
      res.status(404).json({
        message: "Login failed",
        data: [],
      });
    }
  } else {
    res.status(404).json({
      message: "Register first",
      data: [],
    });
  }
};

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  // fileFilter: (req, file, cb) => {
  //   if (
  //     file.mimetype == "image/png" ||
  //     file.mimetype == "image/jpg" ||
  //     file.mimetype == "image/jpeg"
  //   ) {
  //       cb(null, true);

  //   } else {
  //     cb(null, false);
  //     return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  //   }
  // },
}).single("file");

const addBulkEmployee = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      console.log(req.file.path);
      const data = readDataFromExcel.readDataFromExcel(req.file.path);

      const flag = await employeeModel.insertMany(data);
      if (flag) {
        res.status(200).json({
          message: "success",
          data: flag,
        });
      } else {
        res.status(200).json({
          message: "failed",
        });
      }
    }
  });
};

module.exports = {
  getAllEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
  filterEmployee,
  loginEmployee,
  addBulkEmployee,
};
