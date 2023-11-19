/* eslint-disable react/prop-types */
import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";
import {Navigate} from "react-router-dom"
import useUserRole from "../hooks/useUserRole";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [role, roleLoading] = useUserRole()
    console.log(role)
    console.log(loading, roleLoading)
    if(loading || roleLoading){
        return <Loader/>
    }
    if(user && role === "admin"){
        return children
    }
    return <Navigate to="/dashboard"/>
}
export default AdminRoute;