import React from 'react';

const CategoryCard = ({ category }) => {
  const colorMap = {
    'bg-blue-100 border-blue-500': 'from-blue-50 to-blue-100/50',
    'bg-orange-100 border-orange-500': 'from-orange-50 to-orange-100/50',
    'bg-green-100 border-green-500': 'from-green-50 to-green-100/50',
    'bg-pink-100 border-pink-500': 'from-pink-50 to-pink-100/50',
    'bg-purple-100 border-purple-500': 'from-purple-50 to-purple-100/50',
    'bg-teal-100 border-teal-500': 'from-teal-50 to-teal-100/50',
    'bg-yellow-100 border-yellow-500': 'from-yellow-50 to-yellow-100/50',
    'bg-red-100 border-red-500': 'from-red-50 to-red-100/50',
    'bg-gray-100 border-gray-500': 'from-gray-50 to-gray-100/50',
  };

  const gradient = colorMap[category.color] || 'from-gray-50 to-gray-100/50';

  return (
    <div className={`break-inside-avoid rounded-lg border-l-4 ${category.color} bg-gradient-to-br ${gradient} p-4 shadow-sm hover:shadow-md transition-all duration-200`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-gray-800">{category.name}</h3>
        <span className="text-xs text-gray-500">{category.links.length}</span>
      </div>
      <div className="space-y-1">
        {category.links.slice(0, 6).map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 bg-white/70 rounded hover:bg-white transition-colors"
          >
            <div className="font-medium text-sm text-gray-700">{link.name}</div>
          </a>
        ))}
        {category.links.length > 6 && (
          <div className="text-xs text-gray-400 text-center py-1">
            +{category.links.length - 6} 更多
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;