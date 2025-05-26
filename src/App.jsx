import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LimitedTimeTicker from './components/LimitedTimeTicker'

function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <LimitedTimeTicker/>
      
    </>
  )
}

export default App
