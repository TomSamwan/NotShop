const express = require("express");
const router = express.Router();

const Cart = require("../Models/CartModel") 

router.post("/", async (req, res) => {
  await Cart.deleteMany({});
  let data = await Cart.insertMany(req.body);
  return data;
});

router.patch("/updateCart", async (req, res) => {
  const { title, quantity } = req.body;

  let cart_id = await Cart.findOne({ title: title })._id;
  let data = await Cart.updateOne(
    { _id: cart_id },
    { $set: { quantity: quantity } }
  );
  return data;
});

module.exports = router;
