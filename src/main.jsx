
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client" 
import React from "react";
import DashboardPage from "./Dashboard";
import './global.css'; 

const router = createBrowserRouter ([
  {
    path: "/",
    element: <DashboardPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="container" style={{ backgroundColor: '#091235',
    }}>
    <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);