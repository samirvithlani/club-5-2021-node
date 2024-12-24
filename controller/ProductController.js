const productSchema = require("../models/ProductModel");

const createProduct = async (req, res) => {
  try {
    const savedProduct = await productSchema.create(req.body);
    res.status(201).json({
      message: "product saved",
      data: savedProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "erroring while saveing data",
    });
  }
};

module.exports={
    createProduct
}