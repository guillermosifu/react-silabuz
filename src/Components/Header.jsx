import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <div>
    <header>
        <span>Logo</span>
        <nav>
            <ul>
               <Link to="/inicio"> <li>inicio</li></Link>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </header>


    </div>
  )
}

export default Header