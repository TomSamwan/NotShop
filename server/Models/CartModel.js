const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

cartSchema.set("collection", "cart");

module.exports = mongoose.model("Cart", cartSchema);
