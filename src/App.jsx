import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";
import Aboutus from "./components/Aboutus/Aboutus";
import FAQs from "./components/FAQs/FAQs";
import Contect from "./components/Contect/Contect";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
      path: "/fruits",
      element: <Fruits />,
    },
    {
      path: "/dairy",
      element: <Dairy />,
    },
    {
      path: "/seafood",
      element: <SeaFood />,
    },
    {
      path: "/allproducts",
      element: <AllProducts />,
    },
    {
      path:"/aboutus", 
      element: <Aboutus/>
    },
    {
      path:"/FAQs", 
      element: <FAQs/>
    },
    {
      path:"/Contect", 
      element: <Contect/>
    }
  ]
 }, 
])

    
  return <RouterProvider router={router} />;
}
  
export default App;
