// src/components/SummaryCard.js
import React from 'react';

const SummaryCard = () => {
  const summaries = [
    { title: 'Total Sales', value: '$12,345' },
    { title: 'Total Orders', value: '150' },
    { title: 'Total Customers', value: '1,234' },
    { title: 'Average Order', value: '$82.30' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {summaries.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">{item.title}</p>
          <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;