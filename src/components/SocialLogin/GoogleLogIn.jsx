import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContex } from "../../Provider/AuthProvider";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from "react-router-dom";


const GoogleLogIn = () => {
    const{googleLogIn} = useContext(AuthContex)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleLogIn =() =>
    googleLogIn()
    .then(result=> {
        console.log(result.user)
        const userInfo = {
            email :result.user?.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data);
            navigate('/')
        })
        
    })
    .then(error=>console.log(error))

    return (
        <div>
            <div>
                <button onClick={handleGoogleLogIn} className=" btn btn-circle text-3xl"><FaGoogle></FaGoogle></button>
            </div>
        </div>
    );
};

export default GoogleLogIn;