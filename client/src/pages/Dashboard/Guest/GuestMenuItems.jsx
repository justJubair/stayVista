import MenuItem from "../Sidebar/MenuItem";
import { BsFingerprint } from "react-icons/bs";
const GuestMenuItems = () => {
    return(
        <>
              <MenuItem
                icon={BsFingerprint}
                label='My Bookings'
                address='myBookings'
              />
        </>
    )}
export default GuestMenuItems;