import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../authentication/Login";

import AuthSystem from "../AuthLayout/AuthSystem";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../authentication/Register";
import Profile from "../components/Profile";
import PrivateRoute from "../PrivateLayout/PrivateRoute";
import ProfileLayouts from "../Layouts/ProfileLayouts";
import UpdateProfileLayout from "../Layouts/UpdateProfileLayout";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,
    path: "/",
    element: <Home />,

    loader: () => fetch('/data.json'),
  },
  {
    path: "/profile",
    element: 
    <PrivateRoute>
      <ProfileLayouts></ProfileLayouts>
    </PrivateRoute>,
  },
  {
    path: "/update_profile",
    element: 
    <PrivateRoute>
      <UpdateProfileLayout></UpdateProfileLayout>
    </PrivateRoute>,
  },
  {
    path: "auth",
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
    ],
  },
]);

export default router;
