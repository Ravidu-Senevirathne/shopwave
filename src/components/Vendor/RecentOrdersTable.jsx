// src/components/RecentOrdersTable.js
import React from 'react';

const RecentOrdersTable = () => {
  const orders = [
    { id: 1234, date: '08/01/22', status: 'In Process', total: '$1200' },
    { id: 1233, date: '07/31/22', status: 'Shipped', total: '$1000' },
    { id: 1232, date: '07/30/22', status: 'Delivered', total: '$800' },
    { id: 1231, date: '07/29/22', status: 'Cancelled', total: '$600' },
    { id: 1230, date: '07/28/22', status: 'Returned', total: '$400' },
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow mb-4">
      <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b py-2">Order</th>
            <th className="border-b py-2">Date</th>
            <th className="border-b py-2">Status</th>
            <th className="border-b py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2">{`#${order.id}`}</td>
              <td className="py-2">{order.date}</td>
              <td className="py-2">
                <span className={`bg-secondary text-gray-600 px-2 py-1 rounded`}>{order.status}</span>
              </td>
              <td className="py-2">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersTable;