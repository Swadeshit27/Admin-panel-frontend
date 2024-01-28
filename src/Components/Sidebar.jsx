import {
  MdAdminPanelSettings,
  MdSpaceDashboard,
  MdReport,
  MdShoppingBasket,
} from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";


const ListItems = [
  {
    name: "dashboard",
    link: "/",
    active: false,
    icon: <MdSpaceDashboard size={20} />,
  },
  {
    name: "products",
    link: "/products",
    active: false,
    icon: <MdShoppingBasket size={20} />,
  },
  {
    name: "category",
    link: "/category",
    active: false,
    icon: <BiCategoryAlt size={20} />,
  },
  {
    name: "customers",
    link: "/customers",
    active: false,
    icon: <PiUsersThreeFill size={20} />,
  },
  {
    name: "reports",
    link: "/reports",
    active:false,
    icon: <MdReport size={20} />,
  },
  {
    name: "setting",
    link: "/setting",
    active:false,
    icon: <FaGear size={20} />,
  },
];

const Sidebar = ({ darkMode, toggleDarkMode }) => {

  const [page_path, setPage_path] = useState("");
  const location = useLocation();
  useEffect(()=>{
    setPage_path(location.pathname);
  },[location]);

  return (
    <div className="w-full h-full bg-white dark:bg-[#1e2136] border-r-2 border-gray-600 dark:border-[#1e2136] ">
      <div className="flex items-center justify-center text-gray-100 pt-6">
        <MdAdminPanelSettings size={40}
          style={{
            backgroundColor: darkMode ? '#51577d' : '#2c2f48', // Dark and light mode background color
            color: darkMode ? '#000000' : '#ffffff', // Dark and light mode text (fill) color
            borderRadius: '50%', // Optional: Round the icon if needed
            padding: '8px', // Optional: Add padding to the icon
          }}
        />
        <h1 className="text-2xl font-semibold ms-3 text-black dark:text-white" id="heading">Admin Panel</h1>
      </div>
      <ul className="my-20 list">
        {ListItems.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className={`flex items-center  font-medium  text-gray-700 dark:text-gray-300 ${page_path===item.link? "bg-slate-600/40 dark:bg-slate-400/40":""
              } py-2 ps-6 my-2 cursor-pointer rounded-md`}
          >
            {item.icon}
            <li className="ms-3 capitalize">{item.name}</li>
          </Link>
        ))}
      </ul>
      <div className="ldt">
        <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
          <input
            type='checkbox'
            checked={darkMode}
            onChange={toggleDarkMode}
            className='sr-only'
          />
          <span className={`label flex items-center text-sm font-medium ${darkMode ? 'dark:text-white' : 'text-black'}`} id="light_text">
            Light
          </span>
          <span
            className={`slider mx-[1vw] flex h-[2.5vw] w-[5vw] items-center rounded-full p-1 duration-200 ${darkMode ? 'bg-[#FFFFFF]' : 'bg-[#000000]'
              }`}
          >
            <span
              className={`dot h-[2vw] w-[2vw] rounded-full bg-white dark:bg-black  duration-200 ${darkMode ? 'translate-x-[2vw]' : ''
                }`}
            ></span>
          </span>
          <span className={`label flex items-center text-sm font-medium ${darkMode ? 'dark:text-white' : 'text-black'}`} id="dark_text">
            Dark
          </span>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
