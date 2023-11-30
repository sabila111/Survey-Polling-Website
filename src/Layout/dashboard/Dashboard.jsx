import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";



const Dashboard = () => {
    const [isAdmin] =useAdmin();
    return (
        <div className="flex gap-7">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-800">
                <ul className="menu p-5">
                    {
                        isAdmin? <>
                         
                         
                    <li className="text-white font-bold text-lg"><Link to={'dashboard/create'}>Create Survey</Link></li>

                    <li className="text-white font-bold text-lg">
                        <Link to={'/dashboard/surveyInfo'}>
                            
                            All Surveys Info
                        </Link>
                    </li>

                         <li className="text-white font-bold text-lg">
                        <Link to={'/dashboard/users'}>
                            
                            All Users
                        </Link>
                    </li>

                        <div className=" border-2 bg-white"></div>
                         <li className="text-white font-bold text-lg mt-3">
                        <Link to={'/'}>
                            <FaHome></FaHome>
                            Home
                        </Link>
                        
                    </li>
                    
                        </>
                        :
                        <>
                        <li className="text-white font-bold text-lg"><Link to={'dashboard/create'}>Create Survey</Link></li>
                        <div className=" border-2 bg-white"></div>
                         <li className="text-white font-bold text-lg mt-3">
                        <Link to={'/'}>
                            <FaHome></FaHome>
                            Home
                        </Link>
                        
                    </li>
                        </>
                    }
                   
                </ul>
            </div>
            {/* dashboard main content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;