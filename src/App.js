import React from 'react';
import CategoryList from './components/CategoryList';
import CurrencyConverter from './components/CurrencyConverter';
import DataCenterMap from './components/DataCenterMap';
function App() {
  return (

    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 pt-6">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            快点MJJ导航
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            汇集 VPS、云服务器、域名、IDC、网络专线等优质资源
          </p>
        </div>
        <CurrencyConverter />
        <CategoryList />
        <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">全球数据中心地图</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', height: '110vh' }}>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <DataCenterMap />
            </div>
          </div>
        </div>

        <footer className="text-center py-8 mt-10 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm">
          <p className="text-gray-700 font-medium">&copy; {new Date().getFullYear()} 快点MJJ导航</p>
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