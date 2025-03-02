import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

// 地图拓扑JSON数据（使用简化版世界地图）
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// 数据中心数据
const DataCenters = [
  {
    name: "华北2（北京）",
    coordinates: [116.405285, 39.904989],
    provider: "aliyun",
    region: "Asia"
  },
  {
    name: "华东1（杭州）",
    coordinates: [120.15507, 30.274085],
    provider: "aliyun",
    region: "Asia"
  },
  {
    name: "华南1（深圳）",
    coordinates: [114.05786, 22.543096],
    provider: "aliyun",
    region: "Asia"
  },
  {
    name: "亚太东南1（新加坡）",
    coordinates: [103.8198, 1.3521],
    provider: "aliyun",
    region: "Asia"
  },
  {
    name: "美国西部1（硅谷）",
    coordinates: [-122.0748, 37.3875],
    provider: "aliyun",
    region: "North America"
  },
  {
    name: "欧洲中部1（法兰克福）",
    coordinates: [8.6821, 50.1109],
    provider: "aliyun",
    region: "Europe"
  },
  {
    name: "中东东部1（迪拜）",
    coordinates: [55.2708, 25.2048],
    provider: "aliyun",
    region: "Middle East"
  },
  {
    name: "美国东部1（弗吉尼亚）",
    coordinates: [-77.0369, 38.9072],
    provider: "aws",
    region: "North America"
  },
  {
    name: "欧洲西部1（伦敦）",
    coordinates: [-0.1278, 51.5074],
    provider: "aws",
    region: "Europe"
  },
  {
    name: "亚太东北1（东京）",
    coordinates: [139.6917, 35.6895],
    provider: "aws",
    region: "Asia"
  },
  {
    name: "亚太东南2（悉尼）",
    coordinates: [151.2093, -33.8688],
    provider: "aws",
    region: "Asia"
  },
  {
    name: "南美东部1（圣保罗）",
    coordinates: [-46.6333, -23.5505],
    provider: "aws",
    region: "South America"
  },
  {
    name: "美国中部1（达拉斯）",
    coordinates: [-96.7970, 32.7767],
    provider: "azure",
    region: "North America"
  },
  {
    name: "亚太东部1（香港）",
    coordinates: [114.1694, 22.3193],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "欧洲北部1（阿姆斯特丹）",
    coordinates: [4.9041, 52.3676],
    provider: "google-cloud",
    region: "Europe"
  },
  {
    name: "美国西部2（洛杉矶）",
    coordinates: [-118.2437, 34.0522],
    provider: "google-cloud",
    region: "North America"
  },
  {
    name: "亚太南部1（孟买）",
    coordinates: [72.8777, 19.0760],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "加拿大中部1（多伦多）",
    coordinates: [-79.3832, 43.6532],
    provider: "google-cloud",
    region: "North America"
  },
  {
    name: "欧洲西部2（巴黎）",
    coordinates: [2.3522, 48.8566],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太南部2（首尔）",
    coordinates: [126.9780, 37.5665],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "非洲南部1（开普敦）",
    coordinates: [18.4241, -33.9249],
    provider: "aws",
    region: "Africa"
  },
  {
    name: "亚太东北2（大阪）",
    coordinates: [135.5022, 34.6937],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "美国东部2（俄亥俄）",
    coordinates: [-82.9988, 39.9612],
    provider: "google-cloud",
    region: "North America"
  },
  {
    name: "欧洲西部3（马德里）",
    coordinates: [-3.7038, 40.4168],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太东南3（雅加达）",
    coordinates: [106.8456, -6.2088],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "中东西部1（巴林）",
    coordinates: [50.5577, 26.0667],
    provider: "aws",
    region: "Middle East"
  },
  {
    name: "亚太南部3（悉尼）",
    coordinates: [151.2093, -33.8688],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "欧洲北部2（赫尔辛基）",
    coordinates: [24.9384, 60.1699],
    provider: "google-cloud",
    region: "Europe"
  },
  {
    name: "美国西部3（盐湖城）",
    coordinates: [-111.8910, 40.7608],
    provider: "azure",
    region: "North America"
  },
  {
    name: "亚太东北3（大阪）",
    coordinates: [135.5022, 34.6937],
    provider: "aws",
    region: "Asia"
  },
  {
    name: "南美西部1（圣地亚哥）",
    coordinates: [-70.6693, -33.4489],
    provider: "google-cloud",
    region: "South America"
  },
  {
    name: "欧洲西部4（米兰）",
    coordinates: [9.1900, 45.4642],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太东南4（墨尔本）",
    coordinates: [144.9631, -37.8136],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "非洲北部1（约翰内斯堡）",
    coordinates: [28.0473, -26.2041],
    provider: "aws",
    region: "Africa"
  },
  {
    name: "美国东部3（亚特兰大）",
    coordinates: [-84.3880, 33.7490],
    provider: "azure",
    region: "North America"
  },
  {
    name: "亚太南部4（钦奈）",
    coordinates: [80.2707, 13.0827],
    provider: "aws",
    region: "Asia"
  },
  {
    name: "欧洲北部3（斯德哥尔摩）",
    coordinates: [18.0686, 59.3293],
    provider: "google-cloud",
    region: "Europe"
  },
  {
    name: "亚太东北4（首尔）",
    coordinates: [126.9780, 37.5665],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "美国西部4（凤凰城）",
    coordinates: [-112.0740, 33.4484],
    provider: "azure",
    region: "North America"
  },
  {
    name: "亚太东南5（曼谷）",
    coordinates: [100.5018, 13.7563],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "欧洲西部5（苏黎世）",
    coordinates: [8.5417, 47.3769],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太南部5（海得拉巴）",
    coordinates: [78.4867, 17.3850],
    provider: "aws",
    region: "Asia"
  },
  {
    name: "美国中部2（芝加哥）",
    coordinates: [-87.6298, 41.8781],
    provider: "azure",
    region: "North America"
  },
  {
    name: "欧洲西部6（都柏林）",
    coordinates: [-6.2603, 53.3498],
    provider: "google-cloud",
    region: "Europe"
  },
  {
    name: "亚太东北5（大阪）",
    coordinates: [135.5022, 34.6937],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "南美东部2（里约热内卢）",
    coordinates: [-43.1729, -22.9068],
    provider: "aws",
    region: "South America"
  },
  {
    name: "非洲南部2（约翰内斯堡）",
    coordinates: [28.0473, -26.2041],
    provider: "azure",
    region: "Africa"
  },
  {
    name: "亚太东南6（吉隆坡）",
    coordinates: [101.6869, 3.1390],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "欧洲西部7（华沙）",
    coordinates: [21.0122, 52.2297],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "美国西部5（丹佛）",
    coordinates: [-104.9903, 39.7392],
    provider: "azure",
    region: "North America"
  },
  {
    name: "亚太南部6（班加罗尔）",
    coordinates: [77.5946, 12.9716],
    provider: "aws",
    region: "Asia"
  },
  {
    name: "欧洲北部4（奥斯陆）",
    coordinates: [10.7522, 59.9139],
    provider: "google-cloud",
    region: "Europe"
  },
  {
    name: "亚太东北6（东京）",
    coordinates: [139.6917, 35.6895],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "美国东部4（迈阿密）",
    coordinates: [-80.1918, 25.7617],
    provider: "azure",
    region: "North America"
  },
  {
    name: "欧洲西部8（维也纳）",
    coordinates: [16.3738, 48.2082],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太东南7（马尼拉）",
    coordinates: [120.9842, 14.5995],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "非洲北部2（开罗）",
    coordinates: [31.2357, 30.0444],
    provider: "aws",
    region: "Africa"
  },
  {
    name: "美国中部3（堪萨斯城）",
    coordinates: [-94.5786, 39.0997],
    provider: "azure",
    region: "North America"
  },
  {
    name: "欧洲西部9（布鲁塞尔）",
    coordinates: [4.3517, 50.8503],
    provider: "google-cloud",
    region: "Europe"
  },
  {
    name: "亚太东北7（札幌）",
    coordinates: [141.3545, 43.0618],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "南美西部2（利马）",
    coordinates: [-77.0428, -12.0464],
    provider: "google-cloud",
    region: "South America"
  },
  {
    name: "非洲南部3（开普敦）",
    coordinates: [18.4241, -33.9249],
    provider: "azure",
    region: "Africa"
  },
  {
    name: "亚太东南8（河内）",
    coordinates: [105.8342, 21.0278],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "欧洲西部10（里斯本）",
    coordinates: [-9.1393, 38.7223],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "美国西部6（西雅图）",
    coordinates: [-122.3321, 47.6062],
    provider: "azure",
    region: "North America"
  },
  {
    name: "亚太南部7（浦那）",
    coordinates: [73.8567, 18.5204],
    provider: "aws",
    region: "Asia"
  },
  {
    name: "欧洲北部5（哥本哈根）",
    coordinates: [12.5683, 55.6761],
    provider: "google-cloud",
    region: "Europe"
  },
  {
    name: "亚太东北8（福冈）",
    coordinates: [130.4017, 33.5904],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "美国东部5（波士顿）",
    coordinates: [-71.0589, 42.3601],
    provider: "azure",
    region: "North America"
  },
  {
    name: "欧洲西部11（雅典）",
    coordinates: [23.7275, 37.9838],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太东南9（胡志明市）",
    coordinates: [106.6297, 10.8231],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "非洲北部3（拉各斯）",
    coordinates: [3.3792, 6.5244],
    provider: "aws",
    region: "Africa"
  },
  {
    name: "美国中部4（明尼阿波利斯）",
    coordinates: [-93.2650, 44.9778],
    provider: "azure",
    region: "North America"
  },
  {
    name: "欧洲西部12（布达佩斯）",
    coordinates: [19.0402, 47.4979],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太东北9（名古屋）",
    coordinates: [136.9066, 35.1815],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "南美东部3（布宜诺斯艾利斯）",
    coordinates: [-58.3816, -34.6037],
    provider: "aws",
    region: "South America"
  },
  {
    name: "非洲南部4（德班）",
    coordinates: [31.0292, -29.8587],
    provider: "azure",
    region: "Africa"
  },
  {
    name: "亚太东南10（金边）",
    coordinates: [104.9160, 11.5449],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "欧洲西部13（布拉格）",
    coordinates: [14.4378, 50.0755],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "美国西部7（波特兰）",
    coordinates: [-122.6765, 45.5231],
    provider: "azure",
    region: "North America"
  },
  {
    name: "亚太南部8（艾哈迈达巴德）",
    coordinates: [72.5714, 23.0225],
    provider: "aws",
    region: "Asia"
  },
  {
    name: "欧洲北部6（雷克雅未克）",
    coordinates: [-21.9426, 64.1466],
    provider: "google-cloud",
    region: "Europe"
  },
  {
    name: "亚太东北10（广岛）",
    coordinates: [132.4596, 34.3853],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "美国东部6（费城）",
    coordinates: [-75.1652, 39.9526],
    provider: "azure",
    region: "North America"
  },
  {
    name: "欧洲西部14（卢布尔雅那）",
    coordinates: [14.5058, 46.0569],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太东南11（仰光）",
    coordinates: [96.1561, 16.8409],
    provider: "google-cloud",
    region: "Asia"
  },
  {
    name: "非洲北部4（卡萨布兰卡）",
    coordinates: [-7.5898, 33.5731],
    provider: "aws",
    region: "Africa"
  },
  {
    name: "美国中部5（圣路易斯）",
    coordinates: [-90.1994, 38.6270],
    provider: "azure",
    region: "North America"
  },
  {
    name: "欧洲西部15（索非亚）",
    coordinates: [23.3219, 42.6977],
    provider: "azure",
    region: "Europe"
  },
  {
    name: "亚太东北11（仙台）",
    coordinates: [140.8721, 38.2682],
    provider: "azure",
    region: "Asia"
  },
  {
    name: "南美东部4（蒙得维的亚）",
    coordinates: [-56.1645, -34.9011],
    provider: "aws",
    region: "South America"
  }
];

// 颜色
const providerColors = {
  aliyun: "#00C853" // 绿色
};

// 呼吸动画样式
const styles = `
  @keyframes breathe {
    0% { r: 3; opacity: 0.8; }
    50% { r: 5; opacity: 0.4; }
    100% { r: 3; opacity: 0.8; }
  }
  .breathe-circle {
    animation: breathe 2s infinite ease-in-out;
  }
`;

const DataCenterMap = () => {
  const [selectedDataCenter, setSelectedDataCenter] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative h-[700px] w-full bg-gray-50">
      {/* 注入呼吸动画样式 */}
      <style>{styles}</style>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 100, // 缩小比例以展示全球
          center: [0, 20], // 调整中心点以更好地展示全球
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>

        {DataCenters.map((dc, idx) => (
          <Marker key={idx} coordinates={dc.coordinates}>
            <g
              className="cursor-pointer"
              onClick={() => {
                setSelectedDataCenter(dc);
                setSidebarOpen(true);
              }}
            >
              {/* 呼吸效果的小绿点 */}
              <circle
                cx={0}
                cy={0}
                r={3}
                fill={providerColors.aliyun}
                className="breathe-circle"
              />
            </g>
          </Marker>
        ))}
      </ComposableMap>

      {/* 信息侧边栏 */}
      <div 
        className={`absolute top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '300px' }}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -left-12 top-4 p-2 bg-white rounded-l-lg shadow-md"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600 transform transition-transform" />
        </button>

        {selectedDataCenter && (
          console.log(selectedDataCenter),
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              {selectedDataCenter.provider}-{selectedDataCenter.name}
            </h3>
            <div className="flex items-center mb-2">
              <span 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: providerColors.aliyun }}
              />
              <span className="capitalize">区域：{selectedDataCenter.region}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataCenterMap;