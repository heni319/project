import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product._id}`}> {/* use _id and match route */}
      <div className="border rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform transform p-4 flex flex-col items-center bg-white">
        <img
          src={product.image}  // must be a valid URL from backend
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="font-bold text-lg text-center">{product.name}</h3>
        <p className="text-green-700 font-semibold mt-2">${product.price}</p>
      </div>
    </Link>
  );
}
