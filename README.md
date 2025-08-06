Sales Dashboard Application
📊 Overview
This repository hosts a basic sales dashboard application, showcasing a structured approach to building UIs with Next.js (App Router), TypeScript, and Tailwind CSS. It emphasizes an atomic design principle for component organization, providing a clear, maintainable, and scalable project foundation. The dashboard features interactive charts, mock data, filtering capabilities, and dynamic chart type switching.

🚀 Features
Atomic Design Structure: Components are meticulously organized into atoms, molecules, and organisms directories, promoting high reusability and maintainability across the application.

Next.js 15 Ready: Developed with the latest Next.js conventions, leveraging the power of the App Router and a mix of Server and Client Components for optimal performance.

TypeScript: Ensures robust type safety and improves developer experience.

Tailwind CSS: Utilized for streamlined and responsive UI development, allowing for efficient styling without writing custom CSS.

Interactive Sales Charts:

Displays sales data for the years 2022, 2023, and 2024.

Integrates Recharts for rich and customizable data visualizations.

Multiple Chart Types: Easily switch between Bar, Line, and Pie charts to view data from different perspectives.

Custom Filter Input: Allows users to set a dynamic sales threshold to filter the displayed data.

Mock API Integration: Data is fetched from a local mock API endpoint (/api/sales), simulating a realistic backend data flow.

Dedicated Dashboard Page: A clear and empty dashboard page (/dashboard) serves as the central hub for the sales overview.

Robust Loading & Error States: Chart components gracefully handle data fetching states, displaying loading spinners and informative error messages.

📂 Project Structure (Atomic Design)
The project's component architecture adheres to the principles of atomic design:

app/: Contains Next.js pages and API routes, defining the application's core routing.

api/: Houses mock API endpoints for data simulation.

dashboard/: The primary dashboard page component.

layout.tsx: The root layout, responsible for global HTML structure and styling.

components/: The heart of the UI, organized by atomic design principles.

atoms/: Fundamental, indivisible UI elements (e.g., Button, Input, LoadingSpinner).

molecules/: Simple groups of atoms, forming reusable UI units (e.g., ChartContainer, ChartTypeSwitcher, ThresholdFilter).

organisms/: More complex UI sections composed of molecules and atoms, representing distinct parts of a page (e.g., DashboardHeader, SalesChart).

data/: Stores static or mock data used within the application.

🛠️ Technologies Used
Next.js 15 (App Router)

React 18

TypeScript

Tailwind CSS

Recharts (for charting)

🚀 How to Set Up and Run the Project
Clone the repository:

git clone [YOUR_REPO_URL_HERE]
cd my-sales-dashboard

(Note: Remember to replace [YOUR_REPO_URL_HERE] with the actual URL of your GitHub repository after you create and push the code.)

Install Dependencies:

npm install
# or
yarn install
# or
pnpm install

Install Recharts:

npm install recharts
# or
yarn add recharts
# or
pnpm add recharts

Run the Development Server:

npm run dev
# or
yarn dev
# or
pnpm dev

Open in Browser:
Once the development server is running, open your web browser and navigate to http://localhost:3000/dashboard.

💡 How to Use
Upon loading, the dashboard will display sales data, defaulting to the latest year (2024) from the mock dataset.

Utilize the "Select Year" dropdown to seamlessly switch and view sales data for 2022, 2023, or 2024.

Enter a value into the "Sales Threshold" input to dynamically filter the displayed sales data. Only months with sales figures greater than or equal to your specified threshold will be visualized.

Click the "Bar Chart", "Line Chart", or "Pie Chart" buttons to instantly change the chart's visualization type.

🔮 Further Enhancements (Future Considerations)
Real API Integration: Transition from the current mock API (/api/sales) to fetching live data from an actual backend or a public API (e.g., a comprehensive sales dataset from a data provider).

More Sophisticated Filtering: Implement advanced filtering options such as date range selectors, product category filters, or geographical region filters.

Interactive Chart Features: Enhance chart interactivity with features like zoom, pan, drill-down capabilities, and data point hover effects.

Accessibility Improvements: Conduct a thorough accessibility audit and implement ARIA attributes and keyboard navigation to ensure the dashboard is fully usable for all users.

Authentication/Authorization: Integrate user login and role-based access control to protect sensitive dashboard data.

Error Boundaries: Implement React Error Boundaries to gracefully catch and display errors within component subtrees, preventing the entire application from crashing.

Testing: Develop a comprehensive test suite including unit tests for individual components, integration tests for component interactions, and end-to-end tests for critical user flows.

✉️ Contact
For any questions or feedback, feel free to reach out.
