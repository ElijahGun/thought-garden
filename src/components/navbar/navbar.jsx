import { NavLink } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className='nav-bar'>
        <NavLink className='nav-bar__link nav-bar__link--home' to='/'>🪴Thought Garden🌿</NavLink>
        <div className="nav-bar-box--right">
        <NavLink className='nav-bar__link nav-bar__link--search' to='search'>
          <label className='search-label' htmlFor="search">Search:</label>
          <input className='search-input' type="text" name='search' id='search' />
        </NavLink>
        <NavLink className='nav-bar__link nav-bar__link--create' to='create'>New Thought</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar