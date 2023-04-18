
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client" 
import React from "react";
import LoginPage from "./App";
import DashboardPage from "./Dashboard";
import './global.css'; 

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
      <div style={{ backgroundColor: '#091235' }}>
    <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);