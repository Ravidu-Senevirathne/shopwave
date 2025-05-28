import React from 'react'
import Header from '../../components/Admin/Header'
import SummaryCard from '../../components/Admin/SummaryCard'
import OrdersTable from '../../components/Admin/OrdersTable'
import SalesChart from '../../components/Admin/SalesChart'




function Dashboard() {
  return (
    <div className="min-h-screen bg-[#fcecd8]">
      <Header/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        <SummaryCard/>
        <div className="mt-8">
          <SalesChart/>
        </div>
        <div className="mt-8">
          <OrdersTable/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard