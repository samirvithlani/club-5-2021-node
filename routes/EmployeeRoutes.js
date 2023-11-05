//router -->

const express = require("express");
const router = express.Router();
const employeeController = require("../controller/EmployeeController");
const middlewareTest = require("../util/MiddlewareTest");
const zodMiddleware = require("../middleware/ZodMiddleware");
const employeeValidationSchema = require("../util/EmployeeValidationSchema");

router.get("/employee",employeeController.getAllEmployees);

router.post("/employee",zodMiddleware.validate(employeeValidationSchema),employeeController.addEmployee);


router.delete("/employee/:id",employeeController.deleteEmployee);
router.put("/employee/:id",employeeController.updateEmployee);
router.get("/employee/:id",employeeController.getEmployeeById);
router.get("/employee1/filter",employeeController.filterEmployee);
router.post("/employee/login",employeeController.loginEmployee);

module.exports = router;