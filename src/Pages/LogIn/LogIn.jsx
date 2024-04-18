import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import GoogleLogIn from "../../components/SocialLogin/GoogleLogIn";

 


const LogIn = () => {
    const{signIn} = useContext(AuthContex)

    const handleLogain = e =>{
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
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
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogain} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                               
                            </div>
                        </form>
                        <div className=" flex justify-center items-center mb-4">
                            <GoogleLogIn></GoogleLogIn>
                        </div>
                        <p>new Here Create  <Link to='/signup' className=" text-red-200">An  Account </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;