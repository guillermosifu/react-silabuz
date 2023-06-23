import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import HomeRouter from "../pages/HomeRouter"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRouter from "./PrivateRouter"
import Dashboard from "../pages/Dashboard"
import Products from "../pages/Products"
import Cart from "../pages/Cart"
import DetailProduct from "../pages/DetailProduct"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRouter />}>
                <Route index element={<Home/>} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login/>} />
            </Route>
            
            <Route path="/dashboard" element={<PrivateRouter><Dashboard/></PrivateRouter>}>
                <Route index element={<h1>Home</h1>} />
                <Route path="products" element={<Products />}/>
                <Route path="product/:idProducto" element={<DetailProduct />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
    )
}

export default AppRouter