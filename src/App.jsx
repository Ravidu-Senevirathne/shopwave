import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LimitedTimeTicker from './components/LimitedTimeTicker'
import Home from './pages/Home'
import OurStory from './components/OurStory'
import Footer from './components/Footer'
import FollowUs from './components/FollowUs'
import AdminDashboard from './pages/AdminDashboard'
import VendorDashboard from './pages/VendorDashboard'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
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
      </Routes>
    </Router>
  )
}

export default App