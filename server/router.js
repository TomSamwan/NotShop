const express = require("express");
const database = require("./connect");

let router = express.Router()

router.route("/products").get(async (req, res) => {
  let db = database.getDB()
  let data = await db.collection("Products").find({}).toArray()
  if (data.length > 0) {
    res.json(data)
  } else {
    throw new Error("Data not found!")
  }
})

router.route("/cart").post(async (req, res) => {
  let db = database.getDB()
  let mongoObject = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
    rating: req.body.rating,
  }
  let data = await db.collection("Cart").insertOne(mongoObject)
  return data
})

module.exports = router