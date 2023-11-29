import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../Pages/provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

   if(loading){
    return <span className="loading loading-spinner items-center loading-lg"></span>
   }

    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;