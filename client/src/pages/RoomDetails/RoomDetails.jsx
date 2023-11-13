import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Loader from "../../components/Shared/Loader"
const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch("/rooms.json").then(res=>res.json()).then(data=> 
          {
            const selectedRoom = data.find(room=> room._id === id)
            setRoom(selectedRoom)
            setIsLoading(false)
          })
    },[id])
   
    if(isLoading){
      return <Loader/>
    }
    return(
        <div>
             <p> {room?.title} </p>
        </div>
    )}
export default RoomDetails;