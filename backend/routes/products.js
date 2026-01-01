const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/Product");

// Get all products (with optional category and search filters)
router.get("/", async (req, res) => {
  const { category, search } = req.query;
  let query = {};
  if (category) query.category = category;
  if (search) query.name = { $regex: search, $options: "i" };
  const products = await Product.find(query);
  res.json(products);
});

// Get single product by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const product = await Product.findById(id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  res.json(product);
});

module.exports = router;
