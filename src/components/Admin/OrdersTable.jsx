// src/components/OrdersTable.js
import React from 'react';

const OrdersTable = () => {
  const orders = [
    { id: 1001, date: '07/01/22', customer: 'Alice K.', fulfillment: 'Unfulfilled', payment: 'Paid', total: '$100' },
    { id: 1002, date: '07/02/22', customer: 'Bob L.', fulfillment: 'Unfulfilled', payment: 'Paid', total: '$150' },
    { id: 1003, date: '07/03/22', customer: 'Charlie M.', fulfillment: 'Unfulfilled', payment: 'Paid', total: '$200' },
    { id: 1004, date: '07/04/22', customer: 'Diana N.', fulfillment: 'Unfulfilled', payment: 'Paid', total: '$250' },
    { id: 1005, date: '07/05/22', customer: 'Eve O.', fulfillment: 'Unfulfilled', payment: 'Paid', total: '$300' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
      <h2 className="text-lg font-bold mb-4">Orders</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b py-2 px-4">Order</th>
            <th className="border-b py-2 px-4">Date</th>
            <th className="border-b py-2 px-4">Customer</th>
            <th className="border-b py-2 px-4">Fulfillment Status</th>
            <th className="border-b py-2 px-4">Payment Status</th>
            <th className="border-b py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2 px-4">{`#${order.id}`}</td>
              <td className="py-2 px-4 text-yellow-600">{order.date}</td>
              <td className="py-2 px-4">{order.customer}</td>
              <td className="py-2 px-4">
                <span className="bg-secondary text-gray-600 px-2 py-1 rounded">{order.fulfillment}</span>
              </td>
              <td className="py-2 px-4">
                <span className="bg-secondary text-gray-600 px-2 py-1 rounded">{order.payment}</span>
              </td>
              <td className="py-2 px-4">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;