import React from 'react'
import AdminLayout from '../../components/Admin/Layout'
import SummaryCard from '../../components/Admin/SummaryCard'
import OrdersTable from '../../components/Admin/OrdersTable'
import SalesChart from '../../components/Admin/SalesChart'

function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        <SummaryCard/>
        <div className="mt-8">
          <SalesChart/>
        </div>
        <div className="mt-8">
          <OrdersTable/>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard