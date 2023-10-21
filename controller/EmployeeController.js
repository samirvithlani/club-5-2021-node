const employeeModel = require("../models/EmployeeModel");

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
  const employee = new employeeModel(req.body);
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

const filterEmployee  = async (req,res) => {

        console.log(req.query);
        const query = req.query;
        const data = await employeeModel.find({...query});
        if(data){
            res.status(200).json({
                message:"success",
                data:data
            })
        }else{
            res.status(404).json({
                message:"failed",
                data:[]
            })
        }
        console.log(query);


}


module.exports = {
  getAllEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
    getEmployeeById,
    filterEmployee
};
