'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import ChartContainer from '@/components/molecules/ChartContainer';
import ChartTypeSwitcher from '@/components/molecules/ChartTypeSwitcher';
import ThresholdFilter from '@/components/molecules/ThresholdFilter';
import { SalesDataItem, SalesDataYear } from '@/data/salesData';
import Button from '@/components/atoms/Button';

type ChartType = 'bar' | 'line' | 'pie';

interface SalesChartProps {
  availableYears: number[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#d0ed57'];

const SalesChart: React.FC<SalesChartProps> = ({ availableYears }) => {
  const [selectedYear, setSelectedYear] = useState<number>(availableYears[availableYears.length - 1]);
  const [salesData, setSalesData] = useState<SalesDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [salesThreshold, setSalesThreshold] = useState<number | ''>('');

  useEffect(() => {
    const fetchSalesData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/sales?year=${selectedYear}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: SalesDataYear = await response.json();
        setSalesData(data.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch sales data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSalesData();
  }, [selectedYear]);

  // Filter sales data based on threshold
  const filteredSalesData = useMemo(() => {
    if (salesThreshold === '' || salesThreshold === 0) {
      return salesData;
    }
    return salesData.filter(item => item.sales >= salesThreshold);
  }, [salesData, salesThreshold]);

  // Prepare data for Pie Chart
  const pieChartData = useMemo(() => {
    return filteredSalesData.map(item => ({
      name: item.month,
      value: item.sales,
    }));
  }, [filteredSalesData]);

  const renderChart = () => {
    if (filteredSalesData.length === 0 && !isLoading && !error) {
      return <p className="text-gray-500">No data available for the selected year or after filtering.</p>;
    }

    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredSalesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" name="Monthly Sales" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredSalesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" activeDot={{ r: 8 }} name="Monthly Sales" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end gap-4">
        {/* Year Selector */}
        <div className="flex-grow min-w-[120px]">
          <label htmlFor="year-select" className="block text-sm font-medium text-gray-700 mb-1">
            Select Year
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          >
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Threshold Filter */}
        <div className="flex-grow min-w-[180px]">
          <ThresholdFilter threshold={salesThreshold} onThresholdChange={setSalesThreshold} />
        </div>

        {/* Chart Type Switcher */}
        <div className="flex-grow min-w-[300px]">
          <ChartTypeSwitcher currentType={chartType} onTypeChange={setChartType} />
        </div>
      </div>

      {/* Chart Display */}
      <ChartContainer
        isLoading={isLoading}
        error={error}
        title={`Monthly Sales for ${selectedYear}`}
      >
        {renderChart()}
      </ChartContainer>
    </div>
  );
};

export default SalesChart;