import React from "react";

const UpdateProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Update Profile
        </h2>

        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email (Disabled) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full mt-1 bg-gray-200 cursor-not-allowed"
              placeholder="Your email address"
              disabled
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
