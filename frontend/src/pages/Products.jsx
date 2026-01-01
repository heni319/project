import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import API from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const fetchProducts = async () => {
    let query = [];
    if (search) query.push(`search=${search}`);
    if (category) query.push(`category=${category}`);
    const queryString = query.length ? "?" + query.join("&") : "";
    const res = await API.get(`/products${queryString}`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Shop Worldwide 🌍</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6 justify-center flex-wrap">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <button
          onClick={() => { setSearch(""); setCategory(""); }}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Clear
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
