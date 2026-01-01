import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className="p-8 text-center">
        <p>Your cart is empty.</p>
        <Link
          to="/products"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Go Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout 🛒</h2>

      <div className="flex flex-col gap-4 mb-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>
                ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        <button
          onClick={clearCart}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
