import { createBrowserRouter } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import { Layout } from "../shared/components/Layout";


export const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/product/:id", element: <Product /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
