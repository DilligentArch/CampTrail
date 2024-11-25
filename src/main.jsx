import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css"; // Single import of index.css
import router from "./routes/router";
import AuthProvider from "./AuthProvider/AuthProvider";

createRoot(document.getElementById("root")).render( 
  <StrictMode>
   <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
