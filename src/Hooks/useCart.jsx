import { useQuery } from "@tanstack/react-query";
import useAxiosSeceure from "./useAxiosSeceure";
import useAuth from "./useAuth";



const useCart = () => {
    const axiosSeceure = useAxiosSeceure() 
    const{user} = useAuth();
    const{ refetch, data: cart =[]} = useQuery({
        queryKey : ['cart',user?.email],
        queryFn : async ()=>{
            const res = await axiosSeceure.get(`/cart?email=${user.email}`)
             return res.data;
        },
        enabled:user?true:false
    })
    return [cart,refetch]
 
};

export default useCart;