import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/room";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params] = useSearchParams()
    const [isLoading, setIsLoading] = useState(true)
    const category = params.get("category")
   
    useEffect(()=>{
      getAllRooms().then(data=> 
          {
            if(category){
              const filtered = data.filter(room=> room.category === category)
              setRooms(filtered)
            } else setRooms(data)
            
          })
          setIsLoading(false)
    },[category])
   
    if(isLoading){
      return <Loader/>
    }
    return(
      <Container>
          {
            rooms && rooms.length>0 ?  <div className="grid  grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-3 lg:grid-cols-4">
            {
               rooms.map(room=> <RoomCard key={room._id} room={room} />)
            }
       </div> : <div className="flex items-center justify-center min-h-[calc(100vh-350px)]"><Heading title="No Room Availlable In This Category" subtitle="Please Select Other Categories" center="center"/></div>
          }
         
      </Container>
    )}
export default Rooms;