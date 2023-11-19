import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import { getUserRole } from "../api/auth"

const useUserRole = ()=>{
    const {user} = useAuth()
    const [role, setRole] = useState(null)
    const [roleLoading, setRoleLoading] = useState(true)
    useEffect(()=>{
        getUserRole(user?.email)
        .then(res=>{
            
            setRole(res)
            setRoleLoading(false)
        })
    },[user?.email])
    console.log(role)
    return [role, roleLoading]
}

export default useUserRole