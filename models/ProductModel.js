const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  colors: {
    type: String,
  },
});
module.exports = mongoose.model("product", productSchema);
