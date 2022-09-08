import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCurrentUser } from "../store/actions/user";
import { Role } from "../model/role";
import "./header.css";
import {
  FiArrowRightCircle,
  FiArrowLeftCircle,
  FiClipboard,
  FiFilePlus,
  FiHome,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { useCallback, useState } from "react";

const NavBar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = useCallback(() => {
    dispatch(clearCurrentUser());
    navigate("/login");
  }, []);

  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  // return (

  //      <div className="sidebar" style={{
  //         paddingLeft: '1rem'
  //      }}>
  //         <a href="https://reactjs.org" className="navbar-brand ms-0">
  //             <img src={logo} className="App-logo" alt="logo"/>
  //         </a>

  //         {currentUser &&
  //             <div className="navbar-nav">
  //                 <li className="nav-item">
  //                     <NavLink to="/" className="nav-link">
  //                         <FiHome color="#FFF" size={24} />
  //                         Home
  //                     </NavLink>
  //                 </li>

  //                 <li className="nav-item">
  //   <NavLink to="/registration" className="nav-link">
  //       <FiFilePlus color="#FFF" size={24} />
  //       Registration
  //   </NavLink>
  //                 </li>

  //                 <li className="nav-item">
  //                     <NavLink to="/list" className="nav-link">
  //                         <FiClipboard color="#FFF" size={24} />
  //                         List
  //                     </NavLink>
  //                 </li>

  //             </div>
  //         }

  //         <div className="navbar-nav me-auto">
  //             {currentUser?.role === Role.ADMIN &&
  //                 <li className="nav-item">
  //                     <NavLink to="/admin" className="nav-link">
  //                         Admin
  //                     </NavLink>
  //                 </li>
  //             }
  //         </div>

  //         {!currentUser &&
  //             <div className="navbar-nav ms-auto">
  //                 <li className="nav-item">
  //                     <NavLink to="/register" className="nav-link">
  //                         Sign Up
  //                     </NavLink>
  //                 </li>
  //                 <li className="nav-item">
  //                     <NavLink to="/login" className="nav-link">
  //                         Sign In
  //                     </NavLink>
  //                 </li>
  //             </div>
  //         }

  //         {currentUser &&
  //             <div className="navbar-nav ms-auto">
  //                 <li className="nav-item">
  //                     <NavLink to="/profile" className="nav-link">
  //                         <FiUser color="#FFF" size={24} />
  //                         {currentUser.name}
  //                     </NavLink>
  //                 </li>

  //                 <li className="nav-item">
  //                     <a href="" className="nav-link" onClick={() => logout()}>
  //                         <FiLogOut color="#FFF" size={24} />
  //                         Sign Out
  //                     </a>
  //                 </li>
  //             </div>
  //         }

  //     </div>
  // );

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="closemenu" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FiHome color="#FFF" size={24} />}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </MenuItem>
            <MenuItem icon={<FiFilePlus color="#FFF" size={24} />}>
              <NavLink to="/registration" className="nav-link">
                Registration
              </NavLink>
            </MenuItem>
            <MenuItem icon={<FiClipboard color="#FFF" size={24} />}>
              <NavLink to="/list" className="nav-link">
                List
              </NavLink>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut color="#FFF" size={24} />}>
              <NavLink to="/logout" className="nav-link" onClick={logout}>
                Logout
              </NavLink>
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export { NavBar };
