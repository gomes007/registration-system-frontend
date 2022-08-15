import {NavBar} from "./NavBar";
import {Outlet} from "react-router";
import MySideBar from "./MySideBar";

const SidebarLayout = () => (
    <>
        <NavBar/>
        <Outlet/>
    </>
);

export {SidebarLayout}
