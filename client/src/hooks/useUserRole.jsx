import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import { getUserRole } from "../api/auth"

const useUserRole = ()=>{
    const {user} = useAuth()
    const [role, setRole] = useState(null)
    const [hostLoading, setHostLoading] = useState(true)
    useEffect(()=>{
        getUserRole(user?.email)
        .then(res=>{
            
            setRole(res)
            setHostLoading(false)
        })
    },[user?.email])
   
    return [role, hostLoading]
}

export default useUserRole