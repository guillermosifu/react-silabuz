import { Outlet } from 'react-router-dom'
import Navbar from '../componets/Navbar'

const HomeRouter = () => {
  
  return (
    <div className='max-w-[1200px] mx-auto'>
        <Navbar />
        <Outlet />
        <p>Este es mi footer</p>
    </div>
  )
}

export default HomeRouter
