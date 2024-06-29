import 'bootstrap/dist/css/bootstrap.min.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './layout/app';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Basic from "./layout/basic";
import Single from "./layout/single";

const feather = require('feather-icons');
setTimeout(() => {
  feather.replace();
}, 1000);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
    children: [
      {
        path: '',
        element: <>
          <div>
          <App />
          </div>
        </>
      },

      {
        path: "/detalle/:slug",
        element: <Single />,
      },
    ],
  },
]);


const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />

);


