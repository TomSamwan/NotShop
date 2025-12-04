const express = require("express");
const Product = require("../Models/ProductModel");

const router = express.Router();

// GET all
router.get("/all", async (req, res) => {
  const products = await Product.find({})
  res.json(products);
});

// GET one
router.get("/:id", (req, res) => {
  res.json({ msg: "get one product" });
});

// POST (create) a new product
router.post("/", async (req, res) => {
  const { title, price, description, category, image, rating } = req.body

  try {
    const product = await Product.create({title, price, description, category, image, rating})
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// SEED PRODUCT DATA
router.post("/populateProducts", async (req, res) => {
  const seedProductData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("no data fetched!");
      }
      const products = await response.json();
      return products
    };
    
    try {
    const result = await Product.insertMany(await seedProductData());
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// DELETE a product
router.delete("/:id", (req, res) => {
  res.json({ msg: "random message text" });
});

// UPDATE a product
router.patch("/", (req, res) => {
  res.json({ msg: "random message text" });
});

module.exports = router