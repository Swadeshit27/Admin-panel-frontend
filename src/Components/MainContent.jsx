import { Route, Routes } from "react-router-dom"
import Customers from "../pages/Customers"
import Category from "../pages/Category"
import Reports from "../pages/Reports"
import Setting from "../pages/Setting"
import Dashboard from "../pages/Dashboard"
import Products from "../pages/Products"
import Login from "../pages/Login"



const MainContent = () => {
    return (
        <div className=" w-full h-full bg-neutral-100 dark:bg-[#282d55] absolute top-0 overflow-y-scroll">
            <Routes>
                <Route path={'/'} element={<Dashboard/>} />
                <Route path={'/login'} element={<Login/>} />
                <Route path={'/products'} element={<Products />} />
                <Route path={'/customers'} element={<Customers />} />
                <Route path={'/category'} element={<Category />} />
                <Route path={'/reports'} element={<Reports />} />
                <Route path={'/setting'} element={<Setting />} />
            </Routes>
        </div>
    )
}

export default MainContent
