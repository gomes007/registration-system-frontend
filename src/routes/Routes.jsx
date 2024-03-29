import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePageComponent from "../pages/home/HomePageComponent";
import RegistrationPageComponent from "../pages/registration/RegistrationPageComponent";
import ListPageComponentTable from "../pages/list/ListPageComponentTable";
import {LoginPage} from "../login/login.page";
import {RegisterPage} from "../register/register.page";
import {AuthGuard} from "../guards/auth.guard";
import {AdminPage} from "../pages/admin/admin.page";
import {UnauthorizedPage} from "../unauthorized/unauthorized.page";
import {NotFoundPage} from "../pages/not-found/not-found.page";
import {Role} from "../model/role";
import {ProfilePage} from "../pages/profile/profile.page";
import {ForgotPassword} from "../pages/profile/forgotPassword";
import {RecoveryPassword} from "../pages/recovery/recovery";
import {ConfirmPassword} from "../pages/recovery/ConfirmationPassword";
import {SidebarLayout} from "../components/SidebarLayout";
import Header from "../components/Header";


export default function AppRouter() {

    return (

        <BrowserRouter>

            <div className="container-responsive main">

                <Routes>
                    <Route element={<SidebarLayout/>}>
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

                        <Route path="/header" element={
                            <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                                <Header/>
                            </AuthGuard>
                        }/>


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
                    </Route>

                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/forgotPassword" element={<ForgotPassword/>}/>
                    <Route path="/recovery" element={<RecoveryPassword/>}/>
                    <Route path="/confirmation" element={<ConfirmPassword/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    )
}
