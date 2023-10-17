import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import Allusers from "../../Dashboard/Allusers/Allusers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Dashboard/Dashboard/ManageDoctors/ManageDoctors";
import AddDrugs from "../../Dashboard/AddDrugs/AddDrugs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment />
            },
            {
                path: "/dashboard/users",
                element: <AdminRoute><Allusers /></AdminRoute>
            },
            {
                path: "/dashboard/adddoctor",
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: "/dashboard/managedoctors",
                element: <AdminRoute> <ManageDoctors /> </AdminRoute>
            },
            {
                path: "/dashboard/adddurgs",
                element: <AdminRoute> <AddDrugs /> </AdminRoute>
            }
        ]
    }
])