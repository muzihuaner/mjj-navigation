import React from 'react';
import categories from '../data/categories.json';

const LinkCard = ({ link, categoryColor }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
  >
    <div className="font-semibold text-gray-800 group-hover:text-blue-600 truncate">{link.name}</div>
    {link.desc && <div className="text-xs text-gray-500 mt-1 line-clamp-2">{link.desc}</div>}
  </a>
);

const CategoryList = () => {
  return (
    <div className="space-y-8">
      {categories.map((category, index) => (
        <div key={index} className="break-inside-avoid">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${category.color.replace('border-', 'bg-')}`}></span>
            {category.name}
            <span className="text-sm font-normal text-gray-400">({category.links.length})</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {category.links.map((link, linkIndex) => (
              <LinkCard key={linkIndex} link={link} categoryColor={category.color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;