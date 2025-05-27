import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LimitedTimeTicker from './components/LimitedTimeTicker'
import Home from './pages/Home'
import OurStory from './components/OurStory'
import Footer from './components/Footer'
import FollowUs from './components/FollowUs'



function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <LimitedTimeTicker/>
     <Home/>
     <OurStory/>
     <FollowUs/>
     <Footer/>
     
    </>
  )
}

export default App
