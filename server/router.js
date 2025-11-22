const express = require("express");
const database = require("./connect");

let router = express.Router();

router.route("/products").get(async (req, res) => {
  let db = database.getDB();
  let data = await db.collection("Products").find({}).toArray();
  if (data.length > 0) {
    res.json(data);
  } else {
    throw new Error("Data not found!");
  }
});

router.route("/products/seedData").post(async (req, res) => {
  let db = database.getDB();
  let data = await db.collection("Products").insertMany(req.body);
  return data;
});

router.route("/cart").post(async (req, res) => {
  let db = database.getDB();
  await db.collection("Cart").deleteMany({})
  let data = await db.collection("Cart").insertMany(req.body);
  return data;
});

router.route("/cart/updateCart").put(async (req, res) => {
  const { title, quantity } = req.body;

  let db = database.getDB();

  let cart_id = await db.collection("Cart").findOne({ title: title })._id;
  let data = await db
    .collection("Cart")
    .updateOne({ _id: cart_id }, { $set: { quantity: quantity } });
  return data;
});

module.exports = router;
