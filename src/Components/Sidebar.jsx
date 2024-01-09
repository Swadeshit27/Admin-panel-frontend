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

const ListItems = [
  {
    name: "dashboard",
    link: "/",
    active: true,
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
    active: false,
    icon: <MdReport size={20} />,
  },
  {
    name: "setting",
    link: "/setting",
    active: false,
    icon: <FaGear size={20} />,
  },
];

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-[#1e2136] ">
      <div className="flex items-center justify-center text-gray-100 pt-6">
        <MdAdminPanelSettings size={40} />
        <h1 className="text-2xl font-semibold ms-3">Admin_Panel</h1>
      </div>
      <ul className="my-20 px-4">
        {ListItems.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className={`flex items-center  font-medium  text-gray-300 ${
              item.active && "bg-slate-400/40"
            } py-2 ps-6 my-2 cursor-pointer rounded-md`}
          >
            {item.icon}
            <li className="ms-3 capitalize">{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
