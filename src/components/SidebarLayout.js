import {NavBar} from "./NavBar";
import {Outlet} from "react-router";
import Header from "./Header";

const SidebarLayout = () => (
    <>
        <Header/>
        <div className="sidebar-content-responsive">
            <Outlet/>
        </div>
    </>
);

export {SidebarLayout}
