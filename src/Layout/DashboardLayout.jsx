import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import useAdmin from '../hooks/useAdmin'
import { AuthContext } from '../context/AuthProvider'

export default function DashboardLayout() {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div className='max-w-screen-2xl'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-slate-100">
                <input id="dashboard-drawr" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content max-w-screen-2xl">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawr" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white bg-[#0F172A]">
                        <li><Link to="/dashboard">My Appointment</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/users">All Users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                                <li><Link to="/dashboard/adddurgs">Add Dursg</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
