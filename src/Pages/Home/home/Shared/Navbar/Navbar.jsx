
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";


const Navbar = () => {

    const { user,logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
    
    <li><Link to={'/'}>Home</Link></li>
        <li><Link to='/survey'>All Survey</Link></li>
        <li><Link to='/create'>Create Survey</Link></li>
        <li><Link to='/dashboard/create'>Dashboard</Link></li>
        <li><Link to='/dashboard/pro'>Pro User</Link></li>
        <li><Link to='/register'>Register</Link></li>
        
        
    </>

    return (
        <div>
            <div className="navbar bg-base-100 my-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 font-bold z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Survey World</a>
                </div>
                <div className="navbar-center hidden font-bold lg:flex">
                    <ul className=" mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg">
                    <style>
                        {`
      .menu-horizontal li:hover {
        background-color: rgb(30 64 175);
        padding:10px;
        border-radius:5px;
        color: white
      }
    `}
                    </style>
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user ?
                        (
                            <div className="flex gap-3">
                                <div>
                                    <p className="mt-3 ">{user.email}</p>
                                    <img src={user.photoUrl} alt="" />
                                </div>
                                <button onClick={handleLogOut} className="py-3 px-5 text-white font-medium rounded-lg bg-blue-900">Log Out</button>
                            </div>
                        )

                        :
                        (
                            <div>
                                <Link to={'/login'}>
                                    <button className="py-3 px-5 text-white font-medium rounded-lg bg-blue-900">Login</button>
                                </Link>
                            </div>
                        )
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;