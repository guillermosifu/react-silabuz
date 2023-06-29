import { BrowserRouter,Routes,Route } from "react-router-dom";
import{SearchView,UsersView,UserView } from "../pages"




const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SearchView/>}/>
            <Route path="/users/:username" element={<UsersView/>}/>
            
          
        </Routes>
        </BrowserRouter>
    )
}

export default Router