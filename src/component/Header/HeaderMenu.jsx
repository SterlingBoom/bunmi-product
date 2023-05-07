import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function HeaderMenu({showMenu}) {
  return (
    <ul className={`nav-menu-ul  ${showMenu ? 'open' : ''}`}>
      <li>
        <Link to='./sign-in'>Sign in</Link>
      </li>
      <li>
        <Link to='sign-up'>Sign up</Link>
      </li>
      <li>
        <Link to='products'>Products</Link>
      </li>
      <li>
        <button className='logout-btn'>LogOut</button>
      </li>
    </ul>
  )
}

export default HeaderMenu
