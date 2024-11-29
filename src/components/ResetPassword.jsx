import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    resetPassword(email)
      .then(() => {
        setMessage("Password reset link has been sent to your email.");
      })
      .catch((err) => {
        setError("Failed to send password reset link. Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Reset Password
        </h2>

        {/* Success/Error Messages */}
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full mt-1"
              placeholder="Enter your registered email"
              required
            />
          </div>

          {/* Reset Password Button */}
          <button type="submit" className="btn btn-primary w-full">
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center mt-4">
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
