const roter = require("express").Router()
const categoryController = require("../controller/CategoryController")
roter.get("/",categoryController.getCategories)
module.exports = roter