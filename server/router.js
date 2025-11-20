const express = require("express");
const database = require("./connect");

let router = express.Router()

router.route("/products").get(async (req, res) => {
  let db = database.getDB()
  let data = await db.collection("Products").find({}).toArray()
  if (data.length > 0) {
    console.dir(res.json(data))
  } else {
    throw new Error("Data not found!")
  }
})

module.exports = router