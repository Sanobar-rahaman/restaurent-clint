import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const DeshBord = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className=" flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className=" menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashbord/adminHome'> <FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashbord/addItems'> <FaUtensils></FaUtensils> Add items</NavLink></li>
                            <li><NavLink to='/dashbord/manageItems'> <FaList></FaList> manage Items</NavLink></li>
                            <li><NavLink to='/dashbord/booking'> <FaBook></FaBook>Manage Booking</NavLink></li>
                            <li><NavLink to='/dashbord/users'> <FaUser></FaUser> All Users</NavLink></li>

                        </>
                            :
                            <>
                                <li><NavLink to='/dashbord/userHome'> <FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashbord/paymentHistory'> <FaCalendar></FaCalendar>Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                                <li><NavLink to='/dashboard/review'> <FaAd></FaAd>Review</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'><FaList></FaList> my Booking</NavLink></li>
                            </>

                    }
                    {/* shared components */}
                    <div className=" divider"></div>
                    <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/order'> <FaSearch></FaSearch> manu</NavLink></li>
                    <li><NavLink to='/contact'> <FaVoicemail></FaVoicemail> Contact</NavLink></li>
                </ul>

            </div>
            <div className=" flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default DeshBord;