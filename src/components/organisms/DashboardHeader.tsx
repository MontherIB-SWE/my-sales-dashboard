import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-6 rounded-lg mb-6 border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard 📈</h1>
      <p className="text-gray-600 mt-2">Overview of sales performance for different years.</p>
    </header>
  );
};

export default DashboardHeader;