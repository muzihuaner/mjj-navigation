// src/components/CategoryList.jsx
import React from 'react';
import CategoryCard from './CategoryCard';
import categories from '../data/categories.json'; // 修改导入方式

const CategoryList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;