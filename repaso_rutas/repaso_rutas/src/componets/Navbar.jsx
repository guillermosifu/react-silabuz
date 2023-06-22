import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <article className="max-w-[1200px] mx-auto flex justify-between py-4">
        <span>Logo</span>
        <ul className="flex gap-4">
            <li>
                <Link to={'/'}>
                    Home
                </Link>
            </li>
            <li>
                <Link to={'/login'}>
                    Login
                </Link>
            </li>
            <li>
                <Link to={'/register'}>
                    Register
                </Link>
            </li>
        </ul>
      </article>
    </div>
  )
}

export default Navbar
