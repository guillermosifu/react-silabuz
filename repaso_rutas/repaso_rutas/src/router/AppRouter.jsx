import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import HomeRouter from "../pages/HomeRouter"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRouter />}>
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRouter