import React from 'react'
import Home from './pages/home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Update from './pages/Update'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  )
}

export default App