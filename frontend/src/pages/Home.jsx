import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          image: item.image,
        }));
        setLatest(mapped);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-5xl font-bold mb-6">Shop Worldwide 🌍</h1>
        <p className="text-gray-600 mb-8">Premium products. Global delivery.</p>
        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Start Shopping
        </Link>
      </section>

      {/* Latest Models */}
      <section className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Models</h2>
        {loading ? (
          <p className="text-center">Loading latest products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {latest.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Dashboard / Highlights */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold">1000+</h3>
            <p className="text-gray-700">Products Worldwide</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="text-gray-700">Shipping</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-gray-700">Customer Support</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-5xl mx-auto px-8 text-center space-y-4">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-gray-700">
          MyFitIndia is your worldwide shopping destination for premium products.
          We carefully select the latest trends and bring them to your doorstep
          with global delivery and excellent customer service.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 py-12 text-center space-y-4">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p>Email: support@myfitindia.com</p>
        <p>Phone: +1 (234) 567-890</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://facebook.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-500 font-semibold hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 font-semibold hover:underline"
          >
            Twitter
          </a>
        </div>
      </section>
    </div>
  );
}
