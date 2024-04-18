import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";



const NavBar = () => {
    const { logOut, user } = useContext(AuthContex)
    const[isAdmin] = useAdmin()
    const[cart] = useCart()
    const links = <>

        <li><NavLink className=" mr-5" to='/'>Home</NavLink></li>
        <li><NavLink>Contact us</NavLink></li>
        <li><NavLink className=' ml-4' to='/menu'>Our Manu</NavLink></li>
        <li><NavLink className=' ml-4' to='/order'>Order</NavLink></li>
        <li><NavLink className=' ml-4' to='/login'>LogIn</NavLink></li>
        <li><NavLink className=' ml-4' to='/signup'>SignUp</NavLink></li>
        {
            user && isAdmin && <li><NavLink className=' ml-4' to='/dashbord/adminHome'>Deshboard</NavLink></li>
        }
        {
            user && !isAdmin && <li><NavLink className=' ml-4' to='/dashbord/userHome'>Deshboard</NavLink></li>
        }
        <li><NavLink className=' ml-4' to='/dashbord/cart'>
            <button className="btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">{cart.length}</div>
            </button>
        </NavLink></li>


    </>
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .then(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black  text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <span className=" ml-6">{user.email}</span>
                    }
                    {
                        user ? <button className="btn btn-primary" onClick={handleLogout}>Logut</button> :
                            <Link to='/login'><button className=" btn btn-secondary">LogIn</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;