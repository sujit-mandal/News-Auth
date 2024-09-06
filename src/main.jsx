import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from "./Route/Route";
import React from "react";
import AuthProvider from "./Provider/AuthProvider";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={myCreatedRoute} />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
