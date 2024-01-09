import { FaMagnifyingGlass, FaCircleUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


function TopBar() {
    return (
        <div className="absolute w-full h-20 bg-[#51577d] px-10 flex justify-between items-center">
            <div className="flex items-center  text-gray-200">
                <FaMagnifyingGlass size={20} />
                <input type="text" placeholder="Search" className="ms-2 bg-transparent border-b outline-none" />
            </div>
            <div className="flex text-2xl text-gray-200">
                <IoNotifications className="cursor-pointer mx-2" />
                <MdEmail className="cursor-pointer mx-2" />
                <FaCircleUser className="cursor-pointer mx-2" />
            </div>
        </div>
    )
}

export default TopBar