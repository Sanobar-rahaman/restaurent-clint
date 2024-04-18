import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth() 
    const [isAdmin,isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if(user && isAdmin){
        return children
    }
    
    return <Navigate to='/'></Navigate>
    
};

export default AdminRoute;