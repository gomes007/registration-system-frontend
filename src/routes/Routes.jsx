import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePageComponent from "../pages/home/HomePageComponent";
import RegistrationPageComponent from "../pages/registration/RegistrationPageComponent";
import ListPageComponent from "../pages/list/ListPageComponent";
import {NavBar} from "../components/NavBar";



export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePageComponent/>}/>
                    <Route path="/registration" element={<RegistrationPageComponent/>}/>
                    <Route path="/list" element={<ListPageComponent/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}