import { useState } from 'react'
import glass from '../../assets/glass.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className='header'>
      <nav className='container header-nav'>
        <Link to ="/"className='header-logo'>
          <img src={glass} alt='logo' />
        </Link>
        <ul className='nav-ul'>
          <li>
            <Link to='/sign-in'>Sign in</Link>
          </li>
          <li>
            <Link to='/product'>Products</Link>
          </li>
        </ul>
        <button
          aria-label='open menu'
          className={`menu-btn  ${showMenu ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <HeaderMenu showMenu={showMenu} />
    </header>
  )
}

export default Header
