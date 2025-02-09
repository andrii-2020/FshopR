/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import _Services from '../services';





export default function Categories({showAllP}) {

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const _navigate = useNavigate();

  


  useMemo(() => {
     _Services.getAllCategories().then(value => {
      setSelectedCategory(value)
    }).catch(e=>{ console.error('Error fetching categories:', e)})
    }, [])

    const handleCategoryClick = (categoryId) => {
        _navigate(`/products/category/${categoryId}`);
        showAllP(false)
        // console.log(categoryId)
      };

  return (
      <div className=" bg-gray-100 p-4" >
        <h2 className="text-xl font-bold mb-4">Категорії</h2>
        {selectedCategory.map((category,index) => (
          <div style={{padding: 20}}
            key={index} 
            onClick={() => handleCategoryClick(category.id)}
            onMouseEnter={() => setActiveService(category.id)}
            onMouseLeave={() => setActiveService(null)}
            className={`flex items-center p-3 cursor-pointer rounded  ${activeService === category.id ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
          >
            <span className="ml-2">{category?.name}</span>          
          </div>
        ))}
      </div>
  )
}
