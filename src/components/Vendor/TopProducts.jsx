// src/components/TopProductsTable.js
import React from 'react';

const TopProductsTable = () => {
  const products = [
    { id: 1,  price: '$120', sales: 120, stock: 120, image: '/src/assets/shoes.jpg'},
    { id: 2,  price: '$180', sales: 180, stock: 180, image: '/src/assets/shoes-2.jpg' },
    { id: 3,  price: '$80', sales: 80, stock: 80, image: '/src/assets/shoes-3.jpg' },
    { id: 4,  price: '$160', sales: 160, stock: 160, image: '/src/assets/shoes-4.jpg' },
    { id: 5,  price: '$100', sales: 100, stock: 100, image: '/src/assets/shoes-5.jpg' },
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow mb-4">
      <h2 className="text-lg font-bold mb-4">Top Products</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b py-2">Product</th>
            <th className="border-b py-2">Price</th>
            <th className="border-b py-2">Sales</th>
            <th className="border-b py-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="py-2 flex items-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-10 h-10 rounded-md object-cover mr-2"
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/40x40'}} 
                />
                {product.name}
              </td>
              <td className="py-2">{product.price}</td>
              <td className="py-2">{product.sales}</td>
              <td className="py-2">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProductsTable;