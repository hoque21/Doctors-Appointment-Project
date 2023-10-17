import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-hot-toast'

export default function Allusers() {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['usrs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                toast.success('Make admin successfulle')
                refetch()
            }
        })
    }
    return (
        <div>
            <div className='mt-6 px-6 text-2xl font-bold'>All users</div>
            <div className="overflow-x-auto px-6 py-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr
                                key={user._id}
                            >
                                <th>{i+1}</th>
                                <td> {user.name} </td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin'&& <button onClick={()=> handleMakeAdmin(user._id)} className='btn btn-primary btn-sm'>Make Admin</button>}</td>
                                <td><button className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
