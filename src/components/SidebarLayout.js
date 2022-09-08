import {NavBar} from "./NavBar";
import {Outlet} from "react-router";
import MySideBar from "./MySideBar";

const SidebarLayout = () => (
    <>
        <NavBar/>
        <div className="sidebar-content-responsive">
            <Outlet/>
        </div>
    </>
);

export {SidebarLayout}
