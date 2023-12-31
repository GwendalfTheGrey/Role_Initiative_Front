import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from "./router";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
