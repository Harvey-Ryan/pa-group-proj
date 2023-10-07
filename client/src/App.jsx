import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import NewOpportunityForm from './NewOpp'
import OppDashboard from './OppDashboard'
import Cookies from 'js-cookie'

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const savedUserData = Cookies.get("userData");
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      setUser(userData);
    }
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser}/>}></Route>
        <Route path='/register' element={<Register user={user} setUser={setUser}/>}></Route>
        <Route path='/login' element={<Login user={user} setUser={setUser}/>}></Route>
        <Route path='/opportunities' element={<OppDashboard user={user} setUser={setUser}/>}></Route>
        <Route path='/newOpp' element={<NewOpportunityForm user={user} setUser={setUser}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
