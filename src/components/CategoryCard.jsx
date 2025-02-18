import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className={`rounded-lg border-l-4 ${category.color} p-4 shadow-sm hover:shadow-md transition-shadow`}>
      <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
      <div className="space-y-2">
        {category.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="block p-2 bg-white rounded hover:bg-gray-50 transition-colors"
          >
            <div className="font-bold">{link.name}</div>
            {link.desc && <div className="text-sm text-gray-500">{link.desc}</div>}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;