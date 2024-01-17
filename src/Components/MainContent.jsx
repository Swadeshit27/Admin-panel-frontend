import { Route, Routes } from "react-router-dom";
import {
  Category,
  Customers,
  Dashboard,
  Products,
  Reports,
  Setting,
} from "../pages";

const MainContent = () => {
  return (
    <div className=" w-full h-full bg-[#282d55]">
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/customers"} element={<Customers />} />
        <Route path={"/category"} element={<Category />} />
        <Route path={"/reports"} element={<Reports />} />
        <Route path={"/setting"} element={<Setting />} />
      </Routes>
    </div>
  );
};

export default MainContent;
