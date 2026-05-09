import React from 'react';
import CategoryList from './components/CategoryList';
import CurrencyConverter from './components/CurrencyConverter';
import DataCenterMap from './components/DataCenterMap';
function App() {
  return (

    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          快点MJJ导航
        </h1>
        <CurrencyConverter />
        <CategoryList />
        <div style={{ display: 'flex', flexDirection: 'column', height: '110vh',marginTop: '20px' }}>
          <header style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
            <h1>全球数据中心地图</h1>
          </header>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <DataCenterMap />
          </div>
        </div>

        <footer className="text-center  py-6 mt-8 border-t border-gray-200">
          <p>&copy; {new Date().getFullYear()} 快点MJJ导航</p>
        </footer>
      </div>
    </div>
  );
}

export default App;