import React from 'react'
import Sidebar from '../../components/Vendor/Sidebar'
import Card from '../../components/Vendor/Card'
import RecentOrdersTable from '../../components/Vendor/RecentOrdersTable'
import TopProductsTable from '../../components/Vendor/TopProducts'



const Dashboard = () => {
  return (
    <div className="flex  bg-[#fcecd8]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 ">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Card title="Today's Sales" value="$12,000" />
          <Card title="Orders Today" value="120" />
          <Card title="Customers Today" value="100" />
          <Card title="Conversion Rate" value="2.5%" />
        </div>

        {/* Recent Orders */}
        <RecentOrdersTable />

        {/* Top Products */}
        <TopProductsTable />

        {/* Create Product Button */}
       
      </div>
    </div>
  );
};

export default Dashboard;