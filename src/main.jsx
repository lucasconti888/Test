
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client" 
import React from "react";
import LoginPage from "./App";
import DashboardPage from "./Dashboard";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/dashboard",
    element: <DashboardPage/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);