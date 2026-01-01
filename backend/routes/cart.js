const express = require("express");
const router = express.Router();
const CartItem = require("../models/CartItem");
const auth = require("../middleware/auth");

// Get user cart
router.get("/", auth, async (req, res) => {
  const cart = await CartItem.find({ user: req.user._id }).populate("product");
  res.json(cart);
});

// Add to cart
router.post("/", auth, async (req, res) => {
  const { productId, quantity } = req.body;
  let item = await CartItem.findOne({ user: req.user._id, product: productId });
  if (item) {
    item.quantity += quantity || 1;
    await item.save();
  } else {
    item = new CartItem({ user: req.user._id, product: productId, quantity: quantity || 1 });
    await item.save();
  }
  res.json(item);
});

// Remove from cart
router.delete("/:id", auth, async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

// Clear cart
router.delete("/", auth, async (req, res) => {
  await CartItem.deleteMany({ user: req.user._id });
  res.json({ message: "Cart cleared" });
});

module.exports = router;
