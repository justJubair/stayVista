import axiosPublic from "./axiosPublic"


export const  getAllRooms = async()=>{
    const res = await axiosPublic("/rooms")
    return res.data
}

export const getSingleRoom = async(_id)=>{
    const res =await axiosPublic(`/room/${_id}`)
    return res.data
}