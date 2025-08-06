import { NextResponse } from 'next/server';
import { mockSalesData, SalesDataYear } from '@/data/salesData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get('year');

  let filteredData: SalesDataYear | undefined;

  if (yearParam) {
    const year = parseInt(yearParam, 10);
    filteredData = mockSalesData.find(d => d.year === year);
  } else {
    // If no year specified, return all data or default to latest year
    // For simplicity, we'll return all data here.
    return NextResponse.json(mockSalesData);
  }

  if (filteredData) {
    return NextResponse.json(filteredData);
  } else {
    return NextResponse.json({ message: 'Sales data not found for the specified year.' }, { status: 404 });
  }
}