import useAuth from "./useAuth"
import {useQuery} from "@tanstack/react-query"
import { getUserRole } from "../api/auth"

const useUserRole = ()=>{
    const {user, loading} = useAuth()
    const {data:role, isLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ["role"],
        queryFn: async()=> await getUserRole(user?.email)
    })

    return [role, isLoading]
}

export default useUserRole