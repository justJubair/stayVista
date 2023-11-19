import MenuItem from "../Sidebar/MenuItem";
import { FaUserCog } from "react-icons/fa";
const AdminMenuItems = () => {
    return(
        <>
            <MenuItem
                icon={FaUserCog}
                label='Manage Users'
                address='manageUsers'
              />
        </>
    )}
export default AdminMenuItems;