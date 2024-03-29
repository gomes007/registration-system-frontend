//import useState hook to create menu collapse state
import React, {useCallback, useState} from "react";

//import react pro sidebar components
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";

//import icons from react icons
import {FaList} from "react-icons/fa";

import {FiArrowLeftCircle, FiArrowRightCircle, FiFilePlus, FiHome, FiLogOut} from "react-icons/fi";

import {RiPencilLine} from "react-icons/ri";
import {BiCog} from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./HeaderSidebar.css";
import {NavLink, useNavigate} from "react-router-dom";
import { clearCurrentUser } from "../store/actions/user";
import { useDispatch } from "react-redux";


const Header = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const handleLogout = useCallback(() => {
        dispatch(clearCurrentUser());
        navigate('/login');
    }, []);

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? <FiArrowRightCircle/> : <FiArrowLeftCircle/>}
                        </div>
                    </SidebarHeader>
                    <SidebarContent className="test">
                        <Menu iconShape="square">
                            <MenuItem icon={<FiHome size={18}/>}>
                                Home
                                <NavLink to="/"/>
                            </MenuItem>
                            <MenuItem icon={<FiFilePlus size={18}/>}>
                                Registration
                                <NavLink to="/registration"/>
                            </MenuItem>
                            <SubMenu title={"List"} icon={<FaList size={18} />}>
                                <MenuItem icon={<FaList size={18} />}>
                                    List - All
                                    <NavLink to="/list" />
                                </MenuItem>
                                <MenuItem icon={<FaList size={18} />}>
                                    List - sub 1
                                    <NavLink to="/list/sub-1" />
                                </MenuItem>
                                <MenuItem icon={<FaList size={18} />}>
                                    List - sub 2
                                    <NavLink to="/list/sub-2" />
                                </MenuItem>
                            </SubMenu>
                            <MenuItem icon={<RiPencilLine size={18}/>}>Author</MenuItem>
                            <MenuItem icon={<BiCog size={18}/>}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut/>} onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

//active={true}

export default Header;
