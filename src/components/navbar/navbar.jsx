import { NavLink } from 'react-router-dom';
import { SearchBar } from '../searchbar/searchbar';
import './navbar.scss';

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className='nav-bar'>
        <NavLink className='nav-bar__link nav-bar__link--home' to='/'>🪴Thought Garden🌿</NavLink>
        <div className="nav-bar-box--right">
          <SearchBar />
        <NavLink className='nav-bar__link nav-bar__link--create' to='create'>New Thought</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar