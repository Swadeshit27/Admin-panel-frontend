import { Route, Routes } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Products from "../Pages/Products"
import Customers from "../Pages/Customers"
import Category from "../Pages/category"
import Reports from "../Pages/Reports"
import Setting from "../Pages/Setting"


const MainContent = () => {
    return (
        <div className=" w-full h-full bg-[#282d55]">
            <Routes>
                <Route path={'/'} element={<Dashboard />} />
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
