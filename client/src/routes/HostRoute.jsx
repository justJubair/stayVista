/* eslint-disable react/prop-types */
import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";
import {Navigate} from "react-router-dom"
import useUserRole from "../hooks/useUserRole";

const HostRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [role, isLoading] = useUserRole()
 
    if(loading || isLoading){
        return <Loader/>
    }
    if(user && role==="host"){
        return children
    }
    return <Navigate to="/dashboard" />
}
export default HostRoute;