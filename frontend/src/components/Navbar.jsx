import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
<Link to="/" className="text-2xl font-bold">MyFitIndia</Link>
<div className="flex gap-6">
<Link to="/products">Shop</Link>
<Link to="/cart">Cart</Link>
</div>
</nav>
);
}