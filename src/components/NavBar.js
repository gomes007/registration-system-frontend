import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/registration" className="nav-link">
                        Registration
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/list" className="nav-link">
                        List Employee
                    </NavLink>
                </li>

            </div>
        </nav>
    )
}

export {NavBar}