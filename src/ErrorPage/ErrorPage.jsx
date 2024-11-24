import React from "react";
import { Link, useRouteError } from "react-router-dom"; // Import required hooks and components

const ErrorPage = () => {
  const error = useRouteError(); // Capture the error details

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center">
        {error?.statusText || error?.message || "The page you're looking for doesn't exist."}
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
