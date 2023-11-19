import axiosPublic from "./axiosPublic"
import axiosSecure from "./axiosSecure"


export const  getAllRooms = async()=>{
    const res = await axiosPublic("/rooms")
    return res.data
}

export const getSingleRoom = async(_id)=>{
    const res =await axiosPublic(`/room/${_id}`)
    return res.data
}

export const saveARoom = async(newRoom)=>{
    const res = await axiosSecure.post("/rooms", newRoom)
    return res.data
}