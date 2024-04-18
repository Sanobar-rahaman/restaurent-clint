
import { Navigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContex)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if(user){
        return children
    }
    
    return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoute;