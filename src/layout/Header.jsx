import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navigation py-2 px-3 d-flex justify-content-between align-items-center">
            <h2 className='m-0'>GitHub Profile Search</h2>
            <nav className="menu">
                <NavLink className="px-3 py-1" to="/">Search</NavLink>
                <NavLink className="px-3 py-1" to="about">About</NavLink>
            </nav>
        </div>
    )
}

export default Header;
