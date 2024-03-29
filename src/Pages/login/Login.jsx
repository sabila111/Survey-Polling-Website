import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {

    const auth = getAuth(app)
    const Provider = new GoogleAuthProvider
    const axiosPublic = useAxiosPublic()
    const {signIn} =useContext(AuthContext)
    const navigate = useNavigate();

    const [error, setError]= useState('')

    const handleGoogle= () =>{
        signInWithPopup(auth, Provider)
        .then(result =>{
            console.log(result.user)
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => 
                {
                    console.log(res.data)
                    navigate(location?.state? location.state : '/')
                })
         })
         .catch(error =>{
            console.error(error.message)
         })
    }

    const handleLogin= e =>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state? location.state : '/')
         })
         .catch(error =>{
            console.error(error.message)
            toast.error('Please enter correct info')
         })
    }

    return (
        <div>

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/99rMwLH/wave-blue-background-wallpaper-free-vector.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ml-60">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="py-3 px-5 rounded-lg text-blue-800 font-bold outline-blue-800 outline-none">Login</button>
                    </div>
                </form>

                <button onClick={ handleGoogle} className="py-2 px-4 bg-blue-800 rounded-full  items-start mx-auto ml-10 text-white">Google</button>

                {
                    error && <p  className='text-red-500 text-center'>{error}</p>
                }

                <p className="text-center mt-4">Do not have an account? Please <Link className="text-blue-900 font-bold" to={'/register'}>Register</Link> </p>
            </div>

        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default Login;