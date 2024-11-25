import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const [error, setError] = useState({}); // Initialize error as an object

  // Validate password (uppercase, lowercase, length)
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    return hasUpperCase && hasLowerCase && isLongEnough;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    let validationErrors = {};

    // Validate Name
    if (name.length < 5) {
      validationErrors.name = "Name should be more than 5 characters.";
    }

    // Validate Password
    if (!validatePassword(password)) {
      validationErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.";
    }

    // If there are validation errors, set them and stop execution
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    // Clear errors if validation passes
    setError({});

    // Create a new user with Firebase
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update user profile with name and photo
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser(user); // Update the context with the new user
            console.log("User registered successfully:", user);
          })
          .catch((updateError) => {
            setError({ register: "Failed to update user profile." });
            console.error("Profile update error:", updateError);
          });
      })
      .catch((registerError) => {
        setError({ register: "Failed to register. Please try again." });
        console.error("Registration error:", registerError);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your full name"
              required
            />
            {error.name && <p className="text-red-500 text-xs mt-2">{error.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your password"
              required
            />
            {error.password && (
              <p className="text-red-500 text-xs mt-2">{error.password}</p>
            )}
          </div>

          {/* Photo URL Input */}
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
              Profile Photo URL
            </label>
            <input
              name="photo"
              type="url"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your profile photo URL"
            />
          </div>
          {error.register && (
            <p className="text-red-500 text-xs mt-2">{error.register}</p>
          )}

          {/* Register Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
