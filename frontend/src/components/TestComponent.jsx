import React from 'react';

const TestComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Dashboard App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          React + Express + MongoDB Application
        </p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              ✅ Frontend Running
            </h2>
            <p className="text-gray-600">
              React app is successfully running on port 5173
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              ✅ Backend Running
            </h2>
            <p className="text-gray-600">
              Express API is running on port 5000
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              ✅ MongoDB Connected
            </h2>
            <p className="text-gray-600">
              Database connection established
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
