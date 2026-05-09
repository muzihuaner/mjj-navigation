import React from 'react';
import CategoryList from './components/CategoryList';
import CurrencyConverter from './components/CurrencyConverter';
import DataCenterMap from './components/DataCenterMap';
function App() {
  return (

    <div className="bg-gray-50 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 pt-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            快点MJJ导航
          </h1>
          <p className="text-gray-500">
            汇集 VPS、云服务器、域名、IDC、网络专线等优质资源
          </p>
        </div>
        <CurrencyConverter />
        <CategoryList />
        <div className="mt-8 border rounded-lg overflow-hidden">
          <div className="bg-gray-200 px-4 py-3">
            <h2 className="text-lg font-semibold text-gray-700">全球数据中心地图</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', height: '110vh' }}>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <DataCenterMap />
            </div>
          </div>
        </div>

        <footer className="text-center py-6 mt-8 border-t border-gray-200">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} 快点MJJ导航</p>
          <p className="mt-2">
            <a
              href="https://github.com/muzihuaner/mjj-navigation/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              提交网站建议
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;