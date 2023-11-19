import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import { getUserRole } from "../api/auth"

const useUserRole = ()=>{
    const {user, loading} = useAuth()
    const [role, setRole] = useState(null)
    useEffect(()=>{
        getUserRole(user?.email)
        .then(res=>{
            
            setRole(res)
        })
    },[user?.email])
   
    return [role]
}

export default useUserRole