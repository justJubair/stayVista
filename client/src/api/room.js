import axiosPublic from "./axiosPublic"
import axiosSecure from "./axiosSecure"

// Fetch all rooms data
export const  getAllRooms = async()=>{
    const res = await axiosPublic("/rooms")
    return res.data
}

// Fetch a single room data
export const getSingleRoom = async(_id)=>{
    const res =await axiosPublic(`/room/${_id}`)
    return res.data
}

// Post a room in the database
export const saveARoom = async(newRoom)=>{
    const res = await axiosSecure.post("/rooms", newRoom)
    return res.data
}

// Get room data by host specific
export const getHostRoom = async(email)=>{
    const res = await axiosSecure.get(`/rooms/${email}`)
    return res.data
}