import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-pink-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Shop Easy</h1>
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
