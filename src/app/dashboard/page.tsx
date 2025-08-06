import DashboardHeader from '@/components/organisms/DashboardHeader';
import SalesChart from '@/components/organisms/SalesChart';
import { mockSalesData } from '@/data/salesData';

// This page is a Server Component by default.
// It can fetch data directly here if needed for server-side rendering,
// or pass props to client components.
export default function DashboardPage() {
  // Extract available years from mock data for the dropdown
  const availableYears = mockSalesData.map(data => data.year);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        {/* SalesChart is a Client Component, passed server-rendered props */}
        <SalesChart availableYears={availableYears} />
      </div>
    </div>
  );
}