import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import PricingPage from './pages/Pricing/PricingPage'
import HomePage from './pages/HomePage/HomePage'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Intergration from './pages/Integration/Intergration';


const App = () => {
  const [showLogin , setShowLogin] = useState(false);
  return (
    <>
    
    <BrowserRouter>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <Routes>
        <Route path="/" element={<Navbar setShowLogin={setShowLogin} />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<PricingPage/>} />
          <Route path="integration" element={<Intergration/>} />
          {/* <Route path="login" element={<Login setShowLogin={setShowLogin}/>} /> */}
           
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App