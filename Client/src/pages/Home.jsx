import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const home = () => {
    const [data, setdata] = useState([])


    const getuser = () => {
        axios.get('http://localhost:1609/all').then((res) => {
            setdata(res.data)
        }).catch((error) => {
            alert("error")
        })
    }
    useEffect(() => {
        getuser()
    }, [])

    const remove = (_id) => {
        axios.delete(`http://localhost:1609/removeuser/${_id}`).then(() => {
            getuser();
        })
            .catch((error) => {
                alert('error while remove data')
            })
    }

    return (
        <div>
            <div className='width-full text-center flex justify-between py-4 px-4 bg-gray-200'>
                <h2 className='text-2xl font-semibold text-center text-red-700 mb-4 '>Welcome to Student Management Dashboard</h2>
                <button className='h-10 py-1 px-3 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer '><Link to="/login">Logout</Link></button>
            </div>
            <table className=' text-center mx-auto my-14 min-width-full table-auto border-collapse border-gray-300'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className='border border-gray-300 px-4 py-2 text-left'>Roll:NO</th>
                        <th className='border border-gray-300 px-14 py-2 text-left'>Student Name</th>
                        <th className='border border-gray-300 px-8 py-2 text-left'>Class</th>
                        <th className='border border-gray-300 px-24 py-2 text-left'>Email</th>
                        <th className='border border-gray-300 px-16 py-2 text-left'>Address</th>
                        <th className='border border-gray-300 px-14 py-2 text-left'>Mobile</th>
                        <th className='border border-gray-300 px-14 py-2 text-left'>Password</th>
                        <th className='border border-gray-300 px-32 py-2 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return <tr key={element._id} className=':hover-bg-gray-100'>
                                <td className='border border-gray-300 px-4 py-2'>{element.rollNo}</td>
                                <td className='border border-gray-300 px-4 py-2'>{element.name}</td>
                                <td className='border border-gray-300 px-4 py-2'>{element.class}</td>
                                <td className='border border-gray-300 px-4 py-2'>{element.email}</td>
                                <td className='border border-gray-300 px-4 py-2'>{element.address}</td>
                                <td className='border border-gray-300 px-4 py-2'>{element.mobile}</td>
                                <td className='border border-gray-300 px-4 py-2'>{element.password}</td>
                                <td className='px-4 py-2'>
                                    <Link to={`/update/${element._id}`}><button className='bg-blue-500 text-white mx-4 px-3 py-1 rounded hover:bg-blue-700 cursor-pointer'>Update</button></Link>
                                    <button className='bg-red-500 text-white mx-4 px-3 py-1 rounded hover:bg-red-700 cursor-pointer' onClick={() => {
                                        remove(element._id)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default home