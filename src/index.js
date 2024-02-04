import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import PdfCatalog from './Pages/PdfCatalog';
import ContactUs from './Pages/ContactUs';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
  },
  {
    path: "/pdf-catalog",
    element: <PdfCatalog/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
