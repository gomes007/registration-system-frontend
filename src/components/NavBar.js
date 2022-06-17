import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {clearCurrentUser} from '../store/actions/user';
import {Role} from "../model/role";
import './header.css';
import {FiClipboard, FiFilePlus, FiHome, FiLogOut, FiUser} from "react-icons/fi";



const NavBar = () => {

    const currentUser = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        navigate('/login')
    }



    return (

         <div className="sidebar">
            <a href="https://reactjs.org" className="navbar-brand ms-0">
                <img src={logo} className="App-logo" alt="logo"/>
            </a>


            {currentUser &&
                <div className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <FiHome color="#FFF" size={24} />
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/registration" className="nav-link">
                            <FiFilePlus color="#FFF" size={24} />
                            Registration
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/list" className="nav-link">
                            <FiClipboard color="#FFF" size={24} />
                            List
                        </NavLink>
                    </li>

                </div>
            }

            <div className="navbar-nav me-auto">
                {currentUser?.role === Role.ADMIN &&
                    <li className="nav-item">
                        <NavLink to="/admin" className="nav-link">
                            Admin
                        </NavLink>
                    </li>
                }
            </div>

            {!currentUser &&
                <div className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link">
                            Sign Up
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">
                            Sign In
                        </NavLink>
                    </li>
                </div>
            }

            {currentUser &&
                <div className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/profile" className="nav-link">
                            <FiUser color="#FFF" size={24} />
                            {currentUser.name}
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <a href="" className="nav-link" onClick={() => logout()}>
                            <FiLogOut color="#FFF" size={24} />
                            Sign Out
                        </a>
                    </li>
                </div>
            }

        </div>
    );
}

export {NavBar}