// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useManu = () =>{
    const axiosPublic = useAxiosPublic()
    // const[manu,setManu] = useState([])
    // const[loading,setLoading] = useState(true)
    // useEffect(()=>{
    //     fetch('http://localhost:5001/menu',)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setManu(data)
    //         setLoading(false)

    //     })
    // },[])
    const {data: menu=[],isPending :loading,refetch} = useQuery({
        queryKey: ['menu'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })

    return[menu,loading,refetch]

}
export default useManu