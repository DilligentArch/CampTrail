import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Ensure correct import of Link
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="navbar bg-[#2F4F4F] text-white">
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
              <Link to="/">Home</Link>
            </li>
            {user && (
              <li>
                <Link to="/update-profile">Update Profile</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          CampTrail
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user && (
            <li>
              <Link to="/update-profile">Update Profile</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {user ? (
          <>
            {/* User Profile Photo */}
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user.photoURL || "/user.png"}
                alt="User Avatar"
                title={user.displayName || "User"}
              />
              {/* Hover to show User Name */}
              <div className="absolute left-0 bottom-[-40px] w-max bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName || "Guest"}
              </div>
            </div>

            {/* Logout Button with Hover Effect */}
            <div className="relative group">
              <button
                onClick={logOut}
                className="btn btn-sm btn-neutral rounded-none"
              >
                Logout
              </button>
              {/* Hover to show User Name */}
              <div className="absolute left-0 bottom-[-40px] w-max bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName || "Guest"}
              </div>
            </div>
          </>
        ) : (
          <Link to="/auth/login" className="btn btn-sm btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
