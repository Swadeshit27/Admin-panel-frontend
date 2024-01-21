import { FaMagnifyingGlass, FaCircleUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


function TopBar({darkMode}) {
    const inputStyles = {   
        borderBottomColor: darkMode ? '#ffffff' : '#000000', // Dark and light mode border color
      };
    return (
        <div className="fixed top-0 w-[80%] z-50 h-16 bg-white dark:bg-[#51577d] px-10 flex justify-between items-center border-b-2 border-gray-600 dark:border-[#51577d]">
            <div className="flex items-center  text-gray-200">
                <FaMagnifyingGlass size={20}
                style={{
                    color: darkMode ? '#ffffff':'#000000' , // Dark and light mode text (fill) color 
                  }}
                />
                <input type="text" placeholder="Search" className="ms-2 border-b outline-none dark:bg-transparent placeholder-gray-700 text-black dark:text-white" 
                style={inputStyles}/>
            </div>
            <div className="flex text-2xl text-gray-200">
                <IoNotifications className="cursor-pointer mx-2" 
                style={{
                    color: darkMode ? '#ffffff':'#000000' , // Dark and light mode text (fill) color 
                  }}
                />
                <MdEmail className="cursor-pointer mx-2" 
                style={{
                    color: darkMode ? '#ffffff':'#000000' , // Dark and light mode text (fill) color 
                  }}
                />
                <FaCircleUser className="cursor-pointer mx-2" 
                style={{
                    color: darkMode ? '#ffffff':'#000000' , // Dark and light mode text (fill) color 
                  }}
                />
            </div>
        </div>
    )
}

export default TopBar