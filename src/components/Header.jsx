import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/logo.svg" alt="Kasa" />
      </Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
