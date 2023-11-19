import MenuItem from "../Sidebar/MenuItem";
import { FaUserCog } from "react-icons/fa";
const AdminMenuItems = () => {
    return(
        <>
            <MenuItem
                icon={FaUserCog}
                label='My Bookings'
                address='myBookings'
              />
        </>
    )}
export default AdminMenuItems;