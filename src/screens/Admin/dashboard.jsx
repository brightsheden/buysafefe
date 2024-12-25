import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Wallets',
      description: 'View and manage all wallets.',
      action: () => navigate('/admin/wallets'), // Adjust the route as needed
    },
    {
      title: 'Withdrawals',
      description: 'View and approve withdrawal requests.',
      action: () => navigate('/admin/withdrawals'), // Adjust the route as needed
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={card.action}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Go to {card.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
