import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="font-bold text-lg text-center">{product.name}</h3>
        <p className="text-green-700 font-semibold mt-2">${product.price}</p>
      </div>
    </Link>
  );
}
