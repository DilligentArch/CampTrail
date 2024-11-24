import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import
import { RouterProvider } from "react-router-dom";
import "./index.css"; // Single import of index.css
import router from "./routes/router";

createRoot(document.getElementById("root")).render( // Fixed usage
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
