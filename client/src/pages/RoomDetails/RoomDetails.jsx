import { useLoaderData} from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Heading from "../../components/Shared/Heading/Heading";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";
const RoomDetails = () => {
  const room = useLoaderData()
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <Heading title={room?.title} subtitle={room?.location} />
      <div className="w-full my-6 md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={room?.image}
          alt={room?.title}
        />
      </div>
      <div className="grid  items-start gap-4 grid-cols-1 md:grid-cols-7">
        <RoomInfo room={room} />
        <div className="col-span-3 order-first md:order-last">
       <RoomReservation room={room}/>
        </div>
      </div>
    </Container>
  );
};
export default RoomDetails;
