/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../../components/Button/Button";
import Calender from "./Calender";
import { useState } from "react";

const RoomReservation = ({ room }) => {
  // set date range 
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection"
  })
  // Calculate total price
  const totalDays = formatDistance(
    new Date(room?.to),
    new Date(room?.from)
  ).split(" ")[0];
  const totalPrice = parseFloat(room?.price) * parseInt(totalDays);

  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden">
      <div className="flex items-center flex-row gap-2 p-4">
        <h3 className="text-2xl font-bold">$ {room?.price}</h3>
        <p className="font-light text-neutral-600">night</p>
      </div>
      <hr />
      <div className="text-center">
        <Calender value={value}/>
      </div>
      <hr />
      <div className="p-4">
        <Button label="Reserve" />
      </div>
      <div className="flex items-center justify-between font-semibold text-lg p-4">
        <h3>Total</h3>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};
export default RoomReservation;
