const router = require("express").Router();
const roleController = require("../controller/RoleController");
const { route } = require("./EmployeeRoutes");
router.post("/role", roleController.addRole);
router.get("/role",roleController.getRoles)
module.exports = router;