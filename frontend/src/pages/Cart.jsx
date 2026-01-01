import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0)
    return <div className="p-8 text-center">Your cart is empty.</div>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart 🛒</h2>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>
                ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
          <button
            onClick={clearCart}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
