import { Navigate, useLocation } from "react-router-dom"

const PrivateRouter = ({children}) => {
    const location = useLocation()

    return location.state?.logged ? children : <Navigate to={'/'} />
}

export default PrivateRouter