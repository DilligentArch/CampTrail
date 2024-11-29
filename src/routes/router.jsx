import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../authentication/Login";
import AuthSystem from "../AuthLayout/AuthSystem";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../authentication/Register";
import PrivateRoute from "../PrivateLayout/PrivateRoute";
import ProfileLayouts from "../Layouts/ProfileLayouts";
import UpdateProfileLayout from "../Layouts/UpdateProfileLayout";
import AboutUslayout from "../Layouts/AboutUslayout";
import ContactUs from "../Layouts/ContactUs";
import ResetPassword from "../components/ResetPassword";
import AdventureDetails from "../components/AdventureDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: () => fetch("/data.json"),
    
  },
  {
    path: "/adventure-details/:id",
    element: <PrivateRoute>
      <AdventureDetails />
    </PrivateRoute>,
    loader: ()=>fetch("/data.json"),
  },
  {
    path: "/about",
    element: <AboutUslayout />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <ProfileLayouts />
      </PrivateRoute>
    ),
  },
  {
    path: "/update-profile",
    element: (
      <PrivateRoute>
        <UpdateProfileLayout />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthSystem />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "reset-password", // Fixed path to be relative to /auth
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
