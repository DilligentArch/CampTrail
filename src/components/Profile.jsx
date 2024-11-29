import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "animate.css"; // Import Animate.css

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-green-700 mb-6 animate__animated animate__fadeInDown">
        Welcome, {user?.displayName || "Guest"}!
      </h1>

      {/* Profile Card */}
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg animate__animated animate__zoomIn">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            className="w-24 h-24 rounded-full object-cover shadow-md"
            src={user?.photoURL || "/user.png"}
            alt="User Avatar"
          />
        </div>

        {/* User Details */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.displayName || "Guest User"}
          </h2>
          <p className="text-gray-600">{user?.email || "No Email Provided"}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link to="/update-profile" className="btn btn-primary btn-sm">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
