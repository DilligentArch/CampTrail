import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin, setUser, handleSignInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(""); // Use a string for error messages
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Login successful:", user);

        // Navigate to the intended route or home
        const redirectPath = location.state?.from?.pathname || "/";
        navigate(redirectPath, { replace: true });
      })
      .catch((err) => {
        console.error("Login failed:", err);
        setError(err.message); // Set the error as a string
      });
  };

  const loginWithGoogle = () => {
    handleSignInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user); // Set the logged-in user in context
        console.log("Google Login successful:", user);

        // Redirect to the intended page or home
        const redirectPath = location.state?.from?.pathname || "/";
        navigate(redirectPath, { replace: true });
      })
      .catch((err) => {
        console.error("Google Login failed:", err);
        setError(err.message); // Set error message
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              type="password"
              id="password"
              name="password"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>
        </form>
        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex justify-between items-center mt-4 text-sm">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
        <div className="divider my-6">OR</div>
        <button onClick={loginWithGoogle} className="btn btn-outline btn-accent w-full">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
