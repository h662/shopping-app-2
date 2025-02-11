import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/slices/userSlice";

function Header() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-pink-600 px-4 h-20 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Shop Easy</h1>
      <nav className="flex items-center gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        {isLoggedIn ? (
          <button
            className="hover:underline bg-red-500 px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
