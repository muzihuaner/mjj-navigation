import React from 'react';
import CategoryList from './components/CategoryList';
function App() {
  return (
    
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          快点VPS导航
        </h1>
        <CategoryList />
      </div>
    </div>
  );
}

export default App;