import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Heading from "../../components/Shared/Heading/Heading";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";
const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRoom = data.find((room) => room._id === id);
        setRoom(selectedRoom);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <Heading title={room?.title} subtitle={room?.location} />
      <div className="w-full my-6 md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="w-full object-cover"
          src={room?.image}
          alt={room?.title}
        />
      </div>
      <div className="grid  items-start gap-4 grid-cols-1 md:grid-cols-7">
        <RoomInfo room={room} />
        <div className="col-span-3 text-center order-first md:order-last">
       <RoomReservation/>
        </div>
      </div>
    </Container>
  );
};
export default RoomDetails;
