import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LimitedTimeTicker from './components/LimitedTimeTicker'
import Home from './pages/Home'
import OurStory from './components/OurStory'
import Footer from './components/Footer'
import FollowUs from './components/FollowUs'
import AdminDashboard from './pages/Admin/Dashboard'
import VendorDashboard from './pages/Vendor/Dashboard'
import Login from './pages/Login'

import SignupForm from './pages/SignupForm'

const MainLayout = () => (
  <>
    <Navbar />
    <Hero/>
    <LimitedTimeTicker/>
    <Home/>
    <OurStory/>
    <FollowUs/>
    <Footer/>
  </>
)

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<MainLayout />} />

        <Route path="/" element={
          <>
            <Hero/>
            <LimitedTimeTicker/>
            <Home/>
            <OurStory/>
            <FollowUs/>
            <Footer/>
          </>
        } />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path='/vendor-dashboard' element={<VendorDashboard/>}/>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login/>} />
        
        
      </Routes>
    </Router>
  )
}

export default App