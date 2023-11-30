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
import PrivateRoute from "../private/PrivateRoute";
import AllUsers from "../Pages/Dashboard/allUsers/AllUsers";
import Info from "../Pages/Dashboard/Info/Info";
import ContactUs from "../Pages/Home/contact/ContactUs";
import Help from "../Pages/Home/help/Help";




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
        loader: () => fetch('https://server-polling-server.vercel.app/survey')
      },
      
      {
        path: "/details",
        element: <Details></Details>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/help",
        element: <Help></Help>,
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
        path: "users",
        element:<AllUsers></AllUsers>,
      },
      {
        path: "surveyInfo",
        element:<Info></Info>,
      },
      
    ],
  },
]);
export default router