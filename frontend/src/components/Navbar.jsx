import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-4 mb-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600">Recipes</h1>
        </Link>
        <div className="flex gap-x-4">
          {user ? (
            <div className="flex gap-x-4">
              <Link to="/add-recipe">
                <button className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600">Add Recipe</button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600">Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;