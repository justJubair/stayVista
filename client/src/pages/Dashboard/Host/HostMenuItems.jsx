import MenuItem from "../Sidebar/MenuItem";
import { BsFillHousesFill } from "react-icons/bs";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { BsGraphUp } from 'react-icons/bs'
const HostMenuItems = () => {
    return(
        <>
            <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              />
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