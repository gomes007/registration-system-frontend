import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePageComponent from "../pages/home/HomePageComponent";
import RegistrationPageComponent from "../pages/registration/RegistrationPageComponent";
import ListPageComponentTable from "../pages/list/ListPageComponentTable";
import {NavBar} from "../components/NavBar";
import {LoginPage} from "../login/login.page";
import {RegisterPage} from "../register/register.page";
import {AuthGuard} from "../guards/auth.guard";
import {AdminPage} from "../pages/admin/admin.page";
import {UnauthorizedPage} from "../unauthorized/unauthorized.page";
import {NotFoundPage} from "../pages/not-found/not-found.page";
import {Role} from "../model/role";
import {ProfilePage} from "../pages/profile/profile.page";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>

            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePageComponent/>}/>

                    <Route path="/registration" element={
                        <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                            <RegistrationPageComponent/>
                        </AuthGuard>
                    }/>

                    <Route path="/list" element={
                        <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                            <ListPageComponentTable/>
                        </AuthGuard>
                    }/>

                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>

                    <Route path="/admin" element={
                        <AuthGuard roles={[Role.ADMIN]}>
                            <AdminPage/>
                        </AuthGuard>
                    }/>

                    <Route path="/profile" element={
                        <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                            <ProfilePage/>
                        </AuthGuard>
                    }/>

                    <Route path="/404" element={<NotFoundPage/>}/>
                    <Route path="/401" element={<UnauthorizedPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    )
}