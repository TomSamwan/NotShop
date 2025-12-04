const express = require("express");
const productRoutes = require("./Routes/productRoutes");
const authRoutes = require("./Routes/authRoutes");
const cartRoutes = require("./Routes/cartRoutes")

let router = express.Router();

router.use('/products', productRoutes)
router.use('/auth', authRoutes)
router.use('/cart', cartRoutes)

module.exports = router;
