'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-down">
        Welcome to the Sales Dashboard! 📈
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-md">
        Explore interactive sales data for different years with various chart types and filtering options.
      </p>
      <Link href="/dashboard" passHref>
        <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
          Go to Dashboard
        </button>
      </Link>
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
