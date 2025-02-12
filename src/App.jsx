
import React, { useState, useEffect } from 'react';
import Categories from './page/Categories';
import _Services from './services';
import AllProducts from './page/AllProducts';
import './App.css'

function App() {
  const [productsall, setProductsall] = useState([]);
  const [showAllP, setShowAllP] = useState(true);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
       _Services.getAllProducts().then(value =>{
        setProductsall(value)
       })
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <div className="md:flex h-screen">
      
      {productsall? 
      <>
      <Categories showAllP={setShowAllP}/>
      {showAllP? <AllProducts products={productsall} />: undefined} 
      
      </>: <div></div>
      }
      
    </div>
  );
}

export default App;
