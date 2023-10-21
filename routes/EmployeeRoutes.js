//router -->

const express = require("express");
const router = express.Router();
const employeeController = require("../controller/EmployeeController");
router.get("/employee",employeeController.getAllEmployees);
router.post("/employee",employeeController.addEmployee);
router.delete("/employee/:id",employeeController.deleteEmployee);
router.put("/employee/:id",employeeController.updateEmployee);
router.get("/employee/:id",employeeController.getEmployeeById);
router.get("/employee1/filter",employeeController.filterEmployee);
module.exports = router;