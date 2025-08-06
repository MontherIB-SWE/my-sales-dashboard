'use client';

import React from 'react';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';

interface ChartContainerProps {
  children: React.ReactNode;
  isLoading: boolean;
  error: string | null;
  title: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ children, isLoading, error, title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-96 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="flex-grow flex items-center justify-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-red-600 text-center">
            <p className="font-bold">Error loading data:</p>
            <p>{error}</p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default ChartContainer;
