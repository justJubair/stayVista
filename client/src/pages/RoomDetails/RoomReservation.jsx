/* eslint-disable react/prop-types */
import Button from "../../components/Button/Button";
import Calender from "./Calender";

const RoomReservation = ({ room }) => {
  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden">
      <div className="flex items-center flex-row gap-2 p-4">
        <h3 className="text-2xl font-bold">$ {room?.price}</h3>
        <p className="font-light text-neutral-600">night</p>
      </div>
      <hr />
      <div className="text-center">
        <Calender />
      </div>
      <hr />
     <div className="p-4">
     <Button label="Reserve"/>
     </div>
      <div className="flex items-center justify-between font-semibold text-lg p-4">
        <h3>Total</h3>
        <div>$ {room?.price}</div>
      </div>
    </div>
  );
};
export default RoomReservation;
