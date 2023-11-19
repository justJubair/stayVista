import MenuItem from "../Sidebar/MenuItem";
import { BsFillHousesFill } from "react-icons/bs";
import { MdOutlineAddHomeWork } from "react-icons/md";
const HostMenuItems = () => {
    return(
        <>
          
              <MenuItem
                icon={MdOutlineAddHomeWork}
                label='Add Room'
                address='addRoom'
              />
              <MenuItem
                icon={BsFillHousesFill}
                label='My Listings'
                address='myListings'
              />
        </>
    )}
export default HostMenuItems;