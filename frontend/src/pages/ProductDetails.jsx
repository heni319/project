import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import productsData from "../data/productsData";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = productsData.find((item) => item.id === parseInt(id));

  if (!product) return <div className="p-8 text-center">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl font-semibold text-green-700">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
