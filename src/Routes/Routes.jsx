import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import AllSurvey from "../Pages/allSurvey/AllSurvey";
import CreateSurvey from "../Pages/createSurvey/CreateSurvey";
import Details from "../Pages/allSurvey/details/Details";
import Dashboard from "../Layout/dashboard/Dashboard";
import Cart from "../Pages/Dashboard/cart/Cart";
import PrivateRoute from "../private/PrivateRoute";
import AllUsers from "../Pages/Dashboard/allUsers/AllUsers";
import ProUser from "../Pages/Dashboard/proUser/ProUser";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/survey",
        element: <AllSurvey></AllSurvey>,
        loader: () => fetch('http://localhost:5000/survey')
      },
      
      {
        path: "/details",
        element: <Details></Details>,
      },

    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "create",
        element: <CreateSurvey></CreateSurvey>,
      },
      {
        path: "pro",
        element: <ProUser></ProUser>,
      },
      {
        path: "users",
        element:<AllUsers></AllUsers>,
      },
    ],
  },
]);
export default router