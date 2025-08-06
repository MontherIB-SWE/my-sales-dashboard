export type SalesDataItem = {
  month: string;
  sales: number;
};

export type SalesDataYear = {
  year: number;
  data: SalesDataItem[];
};

const generateRandomSales = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const mockSalesData: SalesDataYear[] = [
  {
    year: 2022,
    data: [
      { month: 'Jan', sales: generateRandomSales(1000, 2500) },
      { month: 'Feb', sales: generateRandomSales(1200, 2800) },
      { month: 'Mar', sales: generateRandomSales(1500, 3000) },
      { month: 'Apr', sales: generateRandomSales(1800, 3200) },
      { month: 'May', sales: generateRandomSales(2000, 3500) },
      { month: 'Jun', sales: generateRandomSales(2200, 3800) },
      { month: 'Jul', sales: generateRandomSales(2500, 4000) },
      { month: 'Aug', sales: generateRandomSales(2300, 3900) },
      { month: 'Sep', sales: generateRandomSales(2000, 3500) },
      { month: 'Oct', sales: generateRandomSales(2800, 4500) },
      { month: 'Nov', sales: generateRandomSales(3000, 5000) },
      { month: 'Dec', sales: generateRandomSales(3500, 6000) },
    ],
  },
  {
    year: 2023,
    data: [
      { month: 'Jan', sales: generateRandomSales(1500, 3000) },
      { month: 'Feb', sales: generateRandomSales(1700, 3300) },
      { month: 'Mar', sales: generateRandomSales(2000, 3500) },
      { month: 'Apr', sales: generateRandomSales(2300, 3800) },
      { month: 'May', sales: generateRandomSales(2500, 4000) },
      { month: 'Jun', sales: generateRandomSales(2700, 4300) },
      { month: 'Jul', sales: generateRandomSales(3000, 4500) },
      { month: 'Aug', sales: generateRandomSales(2800, 4400) },
      { month: 'Sep', sales: generateRandomSales(2500, 4000) },
      { month: 'Oct', sales: generateRandomSales(3300, 5000) },
      { month: 'Nov', sales: generateRandomSales(3500, 5500) },
      { month: 'Dec', sales: generateRandomSales(4000, 6500) },
    ],
  },
  {
    year: 2024,
    data: [
      { month: 'Jan', sales: generateRandomSales(2000, 3500) },
      { month: 'Feb', sales: generateRandomSales(2200, 3800) },
      { month: 'Mar', sales: generateRandomSales(2500, 4000) },
      { month: 'Apr', sales: generateRandomSales(2800, 4300) },
      { month: 'May', sales: generateRandomSales(3000, 4500) },
      { month: 'Jun', sales: generateRandomSales(3200, 4800) },
      { month: 'Jul', sales: generateRandomSales(3500, 5000) },
      { month: 'Aug', sales: generateRandomSales(3300, 4900) },
      { month: 'Sep', sales: generateRandomSales(3000, 4500) },
      { month: 'Oct', sales: generateRandomSales(3800, 5500) },
      { month: 'Nov', sales: generateRandomSales(4000, 6000) },
      { month: 'Dec', sales: generateRandomSales(4500, 7000) },
    ],
  },
];
