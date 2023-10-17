import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useQuery } from '@tanstack/react-query'

export default function MyAppointment() {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    return (
        <div>
            <div className='mt-6 px-6 text-2xl font-bold'>My Appointment</div>
            <div className="overflow-x-auto px-6 py-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Patient Name</th>
                            <th>Treatment</th>
                            <th>Appointment Date</th>
                            <th>Slot</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr
                                key={booking._id}
                            >
                                <th>{i + 1}</th>
                                <td> {booking.patient} </td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.phone}</td>
                                <td> <button className='btn btn-error btn-sm'>Delete</button> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
