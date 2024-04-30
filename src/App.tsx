import React from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
const App = () => {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login'element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App