import { Outlet } from 'react-router-dom'
import Navbar from '../componets/Navbar'

const HomeRouter = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default HomeRouter
