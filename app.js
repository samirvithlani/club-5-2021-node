const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

bodyParser.urlencoded({ extended: true });
//enable form data

//mongodb package //mongoose..

//model require....

const employeeModel = require("./models/EmployeeModel");

app.get("/employee", async (req, res) => {
  ////db.employees.f
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

  // res.status(200).json({
  //     employees:employees,
  //     message:"suceess"
  // })
});

app.get("/employee/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const employee = await employeeModel.findById(id);
    if ((employee && employee != null) || employee != undefined) {
      res.status(200).json({
        employee: employee,
        message: "success",
      });
    } else {
      res.status(200).json({
        employee: {},
        message: "No employee found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

const db = mongoose.connect("mongodb://127.0.0.1:27017/club5-node", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then(() => {
  console.log("connected to db");
}).catch((err) => {
  console.log(err);
});

const PORT = 3001;
//creating server... using express..
app.listen(PORT, () => {
  console.log("server is running ", PORT);
});
