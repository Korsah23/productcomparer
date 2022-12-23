import {
    createBrowserRouter
  } from "react-router-dom";
  
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Signup from "..//Pages/Signup/Signup";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "about",
        element: <About/>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "signup",
        element: <Signup/>
    },
  ]);


  export default router;