
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [data, setdata] = useState({
        rollNo: '',
        name: '',
        class: '',
        email: '',
        address: '',
        mobile: '',
        password: '',
    });
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:1609/newuser', data)
            .then((res) => {
                console.log(res.data)
                alert("Sucessfully your register")
                navigate('/login')
            }).catch((error) => {
                console.log(error)
            })
    };
    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center">
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Register</h2>
                <label className='block text-gray-700 mb-1'>Roll:No</label>
                <input type="text" placeholder='enter your pin number' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2 focus:ring-blue-200' onChange={(e) => {
                    setdata({
                        ...data,
                        rollNo: e.target.value
                    })
                }} />
                <label className='block text-gray-700 mb-1'>Full Name</label>
                <input type="text" placeholder='enter your name' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2' onChange={(e) => {
                    setdata({
                        ...data,
                        name: e.target.value
                    })
                }} />
                <label className='block text-gray-700 mb-1'>Class</label>
                <input type="text" placeholder='enter your class' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2 focus:ring-blue-200' onChange={(e) => {
                    setdata({
                        ...data,
                        class: e.target.value
                    })
                }} />
                <label className='block text-gray-700 mb-1'>Mail</label>
                <input type="email" placeholder='enter your mail' className='py-2 px-4 w-full border border-gray-300 focus-outline-none focus:ring-2 focus:ring-blue-200' onChange={(e) => {
                    setdata({
                        ...data,
                        email: e.target.value
                    });
                }} />
                <label className='block text-gray-700 mb-1'>Address</label>
                <input type="text" placeholder='enter your address' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2 focus:ring-blue-200' onChange={(e) => {
                    setdata({
                        ...data,
                        address: e.target.value
                    })
                }} />
                <label className='block text-gray-700 mb-1'>Mobile</label>
                <input type="text" placeholder='enter your mobile' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2 focus:ring-blue-200' onChange={(e) => {
                    setdata({
                        ...data,
                        mobile: e.target.value
                    })
                }} />
                <label className='block text-gray-700 mb-1'>Password</label>
                <input type="password" placeholder='enter your name' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2' onChange={(e) => {
                    setdata({
                        ...data,
                        password: e.target.value
                    })
                }} />
                <div className='text-center'>
                    <button type='submit' className='py-1.5 px-4 text-white bg-blue-500 mt-2 text-center rounded cursor-pointer hover:bg-blue-700'>Register</button>
                </div>
                <p className='my-2 text-black'>Already register <Link to="/login" className='text-blue-600 underline'> login</Link></p>
            </form>
        </div>
    )
}

export default Signup