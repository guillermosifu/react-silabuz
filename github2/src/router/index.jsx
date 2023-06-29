import { BrowserRouter,Routes,Route } from "react-router-dom";
import Search from "../pages/Search";
import User from "../pages/User";





const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Search/>}/>
            <Route path="/user" element={<User/>}/>
          
        </Routes>
        </BrowserRouter>
    )
}

export default Router