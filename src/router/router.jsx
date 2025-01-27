import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
        {
            path:"/",
            element:<Home/>
        }
    ]
  },
  {
    path: "/favorite",
    element: <Layout />,
    children:[
        {
            path:"/favorite",
            element:<Favorite/>
        }
    ]
  },
]);
