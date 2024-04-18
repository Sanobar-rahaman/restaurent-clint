import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import swal from "sweetalert";
import GoogleLogIn from "../../components/SocialLogin/GoogleLogIn";


const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    
    const{createUser} = useContext(AuthContex)
    const handleLogin = e =>{
       
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
            const userInfo = {email:email}
            axiosPublic.post('/users',userInfo)
           .then(res=>{
            if(res.data.insertedId){
                swal("Good job!", "user created successfully", "success");

                console.log(result.user);
            }
           })
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center md: w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Register  now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* capca related work */}
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                               
                            </div>
                        </form>
                        <div className=" flex justify-center items-center mb-4">
                            <GoogleLogIn></GoogleLogIn>
                        </div>
                        <p>AllReady hsvsbe a accout   <Link to='/login' className=" text-red-200">Please LogIn </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;