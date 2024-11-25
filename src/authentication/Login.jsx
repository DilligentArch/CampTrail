import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("Login Attempt:", { email, password });
    // Add login logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-sm">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
          <Link to={'/auth/register'} className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
        <div className="divider my-6">OR</div>
        <button className="btn btn-outline btn-accent w-full">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
