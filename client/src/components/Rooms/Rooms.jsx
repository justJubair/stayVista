import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params] = useSearchParams()
    const category = params.get("category")
    
    useEffect(()=>{
        fetch("rooms.json").then(res=>res.json()).then(data=> 
          {
            if(category){
              const filtered = data.filter(room=> room.category === category)
              setRooms(filtered)
            } else setRooms(data)
            
          })
    },[category])
    console.log(rooms)
    return(
      <Container>
          {
            rooms && rooms.length>0 ?  <div className="grid  grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-3 lg:grid-cols-4">
            {
               rooms.map(room=> <RoomCard key={room._id} room={room} />)
            }
       </div> : <Heading title="No Room Availlable In This Category" subtitle="Please Select Other Categories" center="center"/>
          }
         
      </Container>
    )}
export default Rooms;