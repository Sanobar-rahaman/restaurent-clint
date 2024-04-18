import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


import auth from "../components/FireBase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

 export const  AuthContex = createContext();
const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const  axiosPublic = useAxiosPublic()


    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }



    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            // for token
            setUser(currentUser)
            console.log('current user obserb',currentUser);
            if(currentUser){
                const userInfo = {email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('accesss-token',res.data.token);
                        setLoading(false)
                    }
                })
                //get token store clint side

            }
            else{
                // TOD:remove token
                localStorage.removeItem('accesss-token')
                setLoading(false)
            }
           
            // if user exit theen issu a token
           
 
        })
        return () =>{
            return unSubscribe()
        }
    },[axiosPublic])


    const authInfo = {user,createUser,signIn,logOut,loading,googleLogIn}
    return (
        <AuthContex.Provider value={authInfo}>

            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;