import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../authentication/Login";

import AuthSystem from "../AuthLayout/AuthSystem";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../authentication/Register";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,
    path: "/",
    element: <Home />,
    
    loader: () => fetch('/data.json'),
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
