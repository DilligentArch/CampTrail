import React, { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Dynamic titles based on the route
  useEffect(() => {
    const Titles = {
      "/": "CampTrail | Home",
      "/about": "CampTrail | About Us",
      "/contact": "CampTrail | Contact Us",
      "/profile": "CampTrail | Profile",
      "/update-profile": "CampTrail | Update Profile",
      "/auth/login": "CampTrail | Login",
      "/auth/register": "CampTrail | Register",
      "/auth/reset-password": "CampTrail | Reset Password",
    };

    document.title = Titles[location.pathname] || "CampTrail | Explore Adventures";
  }, [location.pathname]);

  const handleLogout = () => {
    logOut();
    toast.success("You have logged out successfully!");
    navigate("/");
  };

  return (
    <nav className="navbar bg-[#2F4F4F] text-white max-w-screen-2xl mx-auto">
      <Toaster />

      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex="0"
            className="btn btn-ghost lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-100 p-2 shadow text-black"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-black"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-black"
                }
              >
                Contact Us
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "text-green-500 font-bold" : "text-black"
                    }
                  >
                    View Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/update-profile"
                    className={({ isActive }) =>
                      isActive ? "text-green-500 font-bold" : "text-black"
                    }
                  >
                    Update Profile
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          CampTrail
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-white"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-white"
              }
            >
              Contact Us
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-bold" : "text-white"
                  }
                >
                  View Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/update-profile"
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-bold" : "text-white"
                  }
                >
                  Update Profile
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {user ? (
          <>
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user.photoURL || "/user.png"}
                alt="User Avatar"
                title={user.displayName || "User"}
              />
              <div className="absolute left-0 bottom-[-40px] w-max bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName || "Guest"}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-neutral rounded-none"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              isActive ? "text-green-500 font-bold" : "btn btn-sm btn-neutral"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
