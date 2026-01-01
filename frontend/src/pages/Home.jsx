import { Link } from "react-router-dom";


export default function Home() {
return (
<section className="text-center py-20">
<h1 className="text-5xl font-bold mb-6">Shop Worldwide 🌍</h1>
<p className="text-gray-600 mb-8">Premium products. Global delivery.</p>
<Link to="/products" className="bg-black text-white px-6 py-3 rounded">
Start Shopping
</Link>
</section>
);
}