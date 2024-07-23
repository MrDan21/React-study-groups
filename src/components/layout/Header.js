import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600"> <Link to={"/"}> StudyGroups </Link></h1>
        <nav>
          {!isLoggedIn ? (
            <>
              <Link to={'/login'} class="mx-2 text-gray-700 hover:text-blue-600">Login</Link>
              <a href="#features" class="mx-2 text-gray-700 hover:text-blue-600">Register</a>
            </>
          ) : (
            <button
              onClick={handleLogout}
              class="mx-2 text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
