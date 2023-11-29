import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
    const isAdmin = true
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-800">
                <ul className="menu p-5">
                    {
                        isAdmin? <>
                         <li className="text-white bg-black"><Link to={'dashboard/cart'}>Create Survey</Link></li>
                         <li className="text-white">
                        <Link to={'/dashboard/users'}>
                            
                            All Users
                        </Link>
                    </li>
                    <div className="divider"></div>
                    <li className="text-white">
                        <Link to={'/'}>
                            <FaHome></FaHome>
                            Home
                        </Link>
                    </li>
                   
                        </>
                        :
                        <>
                        
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