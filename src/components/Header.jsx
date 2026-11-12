import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Kasa</Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
