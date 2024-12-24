const router = require("express").Router()
const productController = require('../controller/ProductController')
router.post("/",productController.createProduct)
module.exports = router