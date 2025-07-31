import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center">
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-center font-bold text-2xl mb-6 text-blue-600'>Login</h2>
                <label className='block text-gray-700 mb-1'>UserName</label>
                <input type="text" placeholder='enter your username' className='w-full border border-gray-300 px-4 py-2 mb-6 rounded focus-outline-none focus:ring-2' />
                <label className='block text-gray-700 mb-1'>Password</label>
                <input type="password" placeholder='enter your name' className='w-full border border-gray-300 px-4 py-2 mb-6 rounded focus-outline-none focus:ring-2'
                />
                <div className='text-center'>
                    <button className='py-1.5 px-4 text-white bg-blue-700 rounded cursor-pointer hover:bg-blue-600'>Login</button>
                </div>
                <p className='my-2 text-black'>Rigister <Link to="/signup" className='text-blue-600 underline'> Signup</Link></p>
            </div>
        </div>
    )
}

export default Login