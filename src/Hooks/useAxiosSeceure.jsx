import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

  const axiosSecure = axios.create({
    baseURL: 'https://final-project-server-wheat.vercel.app/'
 })
const useAxiosSeceure = () => {
  const navigate = useNavigate();
  const{logOut} = useAuth()
  //request interceptor to add authorization headers for every secure coll to the api
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('accesss-token')
    // console.log('requst stoped by interceptor',token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },function(error){
    return Promise.reject(error)

  })
  //interceptor 401 and 403 status
  axiosSecure.interceptors.response.use(function(response){
    return response
  },async(error)=>{
    const status = error.response.status;
    // console.log('status error in interceptor',status);
    //for 401 403 user logout the user  and move user to log in
    if(status === 401|| status === 403){
      await logOut()
      navigate('/login')
    }
    return Promise.reject(error)
  })
  // axiosSecure.interceptors.response(function(response){
  //   return response
  // },(error)=>{
   
  //   console.log('status error in inter');
  //   return Promise.reject(error)
  // })


    return axiosSecure
};

export default useAxiosSeceure;