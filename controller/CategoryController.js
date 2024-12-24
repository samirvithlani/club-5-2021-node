const categorySchema  = require("../models/ProductCategory")

const getCategories = async(req,res)=>{

    const categories = await categorySchema.find()
    res.status(200).json({
        categories:categories
    })

}
module.exports = {
    getCategories
}