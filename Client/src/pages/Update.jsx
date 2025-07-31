import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setuser] = useState({
        _id: 0,
        rollNo: '',
        name: '',
        class: '',
        email: '',
        address: '',
        mobile: '',
        password: '',
    })
    useEffect(() => {
        axios.get(`http://localhost:1609/getone/${id}`).then((res) => {
            setuser(res.data.result)
        }).catch((error) => {
            alert("fail to fetch userdata")
        })
    }, [id]);
    const Updateuser = () => {
        axios.put("http://localhost:1609/updateuser", user).then((res) => {
            navigate('/')
        }).catch((error) => {
            alert("fail to updateing the data")
        })
    }
    return (
        <div className="min-h-screen bg-gray-800 flex items-center justify-center">
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-red-600'>UPDATE</h2>
                <label className='block text-gray-700 mb-1'>Roll:No</label>
                <input value={user.rollNo} type="text" placeholder='enter your pin number' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2 focus:ring-blue-200'
                    onChange={(e) => {
                        setuser({
                            ...user,
                            rollNo: e.target.value
                        })
                    }} />
                <label className='block text-gray-700 mb-1'>Full Name</label>
                <input value={user.name} type="text" placeholder='enter your name' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2' onChange={(e) => {
                    setuser({
                        ...user,
                        name: e.target.value
                    })
                }} />
                <label className='block text-gray-700 mb-1'>Class</label>
                <input value={user.class} type="text" placeholder='enter your class' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2 focus:ring-blue-200' onChange={(e) => {
                    setuser({
                        ...user,
                        class: e.target.value
                    })
                }} />
                <label className='block text-gray-700 mb-1'>Mail</label>
                <input value={user.email} type="email" placeholder='enter your mail' className='py-2 px-4 w-full border border-gray-300 focus-outline-none focus:ring-2 focus:ring-blue-200' onChange={(e) => {
                    setuser({
                        ...user,
                        email: e.target.value
                    })
                }} />
                <label className='block text-gray-700 mb-1'>Address</label>
                <input value={user.address} type="text" placeholder='enter your address' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2 focus:ring-blue-200'
                    onChange={(e) => {
                        setuser({
                            ...user,
                            address: e.target.value
                        })
                    }} />
                <label className='block text-gray-700 mb-1'>Mobile</label>
                <input value={user.mobile} type="text" placeholder='enter your mobile' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2 focus:ring-blue-200'
                    onChange={(e) => [
                        setuser({
                            ...user,
                            mobile: e.target.value
                        })
                    ]} />
                <label className='block text-gray-700 mb-1'>Password</label>
                <input value={user.password} type="password" placeholder='enter your name' className='w-full border border-gray-300 px-4 py-2 rounded focus-outline-none focus:ring-2'
                    onChange={(e) => {
                        setuser({
                            ...user,
                            password: e.target.value
                        })
                    }} />
                <div className='text-center'>
                    <button onClick={Updateuser} className='py-1.5 px-4 text-white bg-red-500 mt-2 text-center rounded cursor-pointer hover:bg-red-700'>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Update