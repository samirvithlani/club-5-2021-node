const roleModel = require("../models/RoleModel");

const addRole = async (req, res) => {
    try {
        const role = new roleModel(req.body);
        const savedRole = await role.save();
        if (savedRole) {
            res.status(200).json({
                message: "Role added successfully",
                data: savedRole
            })
        } else {
            res.status(400).json({
                message: "Role not added",
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "error",
            error: err
        })
    }
}
const getRoles = async(req,res)=>{
    const roles = await roleModel.find();
    res.json({
        message:"roles",
        data:roles
    })
}
module.exports = {
    addRole,
    getRoles
}