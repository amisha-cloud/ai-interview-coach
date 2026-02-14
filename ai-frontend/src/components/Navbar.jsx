import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-indigo-600">
        AI Interview Coach
      </h1>

      <div className="space-x-6 text-gray-600">
        <Link to="/">Home</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:text-indigo-600">
              Login
            </Link>
            <Link to="/register" className="hover:text-indigo-600">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-indigo-600">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-indigo-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}