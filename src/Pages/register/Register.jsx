import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Register = () => {
     
    const axiosPublic = useAxiosPublic()
    const { createUser,updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password,name)

        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('Password should be at least 6 character or longer')
            return
        }
       

        createUser (email, password)
        .then(result => {
         const user= result.user
         console.log(user)
         updateUserProfile(name)
         .then(() => {
             
            const userInfo = {
                name : name,
                email : email
            }
           axiosPublic.post('/users', userInfo)
           .then(res => {
            if (res.data.insertedId){
                console.log('user added to ')
                toast.success('User Created Successfully')
            }
           })
           navigate('/');

        });
        
        })
        .catch(error => {
         console.error(error)
         toast.error('Email alreaday existed')
        })
    }

    return (
       <div>

         <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/99rMwLH/wave-blue-background-wallpaper-free-vector.jpg)' }}>

         <div className="card flex-shrink-0 w-full max-w-lg mb-20">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Name</span>
                    </label>
                    <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                </div>
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
                    <button className="py-3 px-5 rounded-lg bg-blue-900 text-white font-bold ">Register</button>
                </div>
            </form>
            {
                registerError && <p className='text-red-500 text-center'>{registerError}</p>
            }
            {
                success && <p className="text-lime-600 text-center">{success}</p>
            }

            <p className="text-center mt-4">Already have an account? Please <Link className="text-blue-900 font-bold" to={'/login'}>Login</Link></p>

            
        </div>
         </div>
         <ToastContainer></ToastContainer>
       </div>
    );
};

export default Register;