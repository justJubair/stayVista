import axiosPublic from "./axiosPublic"



export const saveUser = async(user)=>{
   
    const currentUser = {
        email: user?.email,
        role: "admin",
        status: "Verified"
    }
    const {data} = await axiosPublic.put(`/users/${user?.email}`, currentUser)
    return data
}

export const getToken = async(email)=>{
    const {data} = await axiosPublic.post("/jwt", email)
   
    return data
}
