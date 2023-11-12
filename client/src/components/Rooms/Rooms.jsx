import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(()=>{
        fetch("rooms.json").then(res=>res.json()).then(data=> setRooms(data))
    },[])
    console.log(rooms)
    return(
      <Container>
          <div className="grid  grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-3 lg:grid-cols-4">
             {
                rooms.map(room=> <RoomCard key={room._id} room={room} />)
             }
        </div>
      </Container>
    )}
export default Rooms;