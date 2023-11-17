import axiosPublic from "./axios"



const saveUser = async(user)=>{
   
    const currentUser = {
        email: user?.email,
        role: "guest",
        status: "Verified"
    }
    const {data} = await axiosPublic.put(`/users/${user?.email}`, currentUser)
    return data
}

export default saveUser