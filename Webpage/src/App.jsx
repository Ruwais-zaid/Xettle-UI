import React from 'react'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/Register'
import Home from './Pages/Home'
import Otp from  './Pages/Otp'
const App = () => {
  return (
    <div className='text-red-500'>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/verify' element={<Otp/>}></Route>
      </Routes>
      </Router>
      
    </div>
  )
}

export default App
