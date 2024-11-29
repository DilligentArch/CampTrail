import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";  // Importing React Hot Toast

const UpdateProfile = () => {
  const { updateUserProfile, setUser } = useContext(AuthContext);
  const [name, setName] = useState(""); // Initially empty
  const [photoURL, setPhotoURL] = useState(""); // Initially empty
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update Firebase Profile
    updateUserProfile({ displayName: name, photoURL })
      .then(() => {
        // Update context with new user data
        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL,
        }));

        // Show success message
        toast.success("Profile updated successfully!");

        // Redirect to home page after success
        setTimeout(() => {
          navigate("/"); // Redirect to home page
        }, 2000); // Optional delay for showing success message
      })
      .catch((err) => {
        // Show error message
        toast.error("Failed to update profile. Please try again.");
        // console.error(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center  max-w-screen-2xl mx-auto">
      <Toaster /> {/* Toast notifications container */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Update Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full mt-1"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Profile Photo URL Input */}
          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
              Profile Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full mt-1"
              placeholder="Enter the URL for your profile photo"
            />
          </div>

          {/* Save Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
