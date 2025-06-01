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
import AdminDashboard from './pages/Admin/Dashboard'
import AdminOrders from './pages/Admin/Orders'
import AdminProducts from './pages/Admin/Products'
import AdminCustomers from './pages/Admin/Customers'
import AdminMarketing from './pages/Admin/Marketing'
import AdminDiscounts from './pages/Admin/Discounts'
import AdminAnalytics from './pages/Admin/Analytics'
import VendorDashboard from './pages/Vendor/Dashboard'
import Login from './pages/Login'
import SignupForm from './pages/SignupForm'
import Welcome from './pages/Welcome'
import PromotionPage from './pages/PromotionPage'
import BestSellers from './pages/BestSellers'

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
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/promotions" element={<PromotionPage />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/orders" element={<AdminOrders />} />
        <Route path="/admin-dashboard/products" element={<AdminProducts />} />
        <Route path="/admin-dashboard/customers" element={<AdminCustomers />} />
        <Route path="/admin-dashboard/marketing" element={<AdminMarketing />} />
        <Route path="/admin-dashboard/discounts" element={<AdminDiscounts />} />
        <Route path="/admin-dashboard/analytics" element={<AdminAnalytics />} />
        <Route path='/vendor-dashboard' element={<VendorDashboard/>}/>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App