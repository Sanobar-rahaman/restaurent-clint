import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSeceure from "./useAxiosSeceure";



const useAdmin = () => {
    const{user} = useAuth()
    const axiosSeceure = useAxiosSeceure()
   const{data: isAdmin,isPending: isAdminLoading} = useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn: async() =>{
        const res = await axiosSeceure.get(`users/admin/${user.email}`);
        console.log(res.data);
        return res.data?.admin;
    }
   })
   return [isAdmin,isAdminLoading]
};

export default useAdmin;