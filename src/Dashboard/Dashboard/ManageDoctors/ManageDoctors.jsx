import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function ManageDoctors() {
    const { data: doctors } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json()
                return data
            }
            catch (error) {

            }
        }
    })
    return (
        <div>
            <div className='mt-6 px-6 text-2xl font-bold pb-6'>Manage Doctors {doctors?.length} </div>
            <div className="overflow-x-auto px-6 py-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) =>
                                <tr
                                    key={doctor._id}
                                >
                                    <th> {i + 1} </th>
                                    <td><div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={doctor.image} alt=''/>
                                        </div>
                                    </div></td>
                                    <td> {doctor.name} </td>
                                    <td> {doctor.email} </td>
                                    <td> {doctor.specialty} </td>
                                    <td><button className='btn btn-error btn-sm'>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
