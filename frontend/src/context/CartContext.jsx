import React, { createContext, useState, useEffect, useContext } from "react";
import API from "../api";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  // Fetch user cart
  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return setCart([]);
      const res = await API.get("/cart");
      setCart(res.data);
    };
    fetchCart();
  }, [user]);

  const addToCart = async (product) => {
    if (!user) return alert("Please login to add items to cart!");
    await API.post("/cart", { productId: product._id });
    const res = await API.get("/cart");
    setCart(res.data);
  };

  const removeFromCart = async (itemId) => {
    await API.delete(`/cart/${itemId}`);
    const res = await API.get("/cart");
    setCart(res.data);
  };

  const clearCart = async () => {
    await API.delete("/cart");
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
