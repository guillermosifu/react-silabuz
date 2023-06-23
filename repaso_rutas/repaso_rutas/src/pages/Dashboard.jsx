import { Outlet } from "react-router-dom"
import DashboardNavbar from "../componets/DashboardNavbar"


const Dashboard = () => {

    return (
        <div>
            <DashboardNavbar />
            <Outlet />
        </div>
    )
}

export default Dashboard