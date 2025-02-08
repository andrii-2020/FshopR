import React, { useState, useEffect } from 'react';
import { CardP } from './ui/CardP';
import { ProductImage } from './ui/ProductImage';
import { ProductDetails } from './ui/ProductDetails';
import { useParams } from 'react-router-dom';
import _Services from '../services';


const ProductPage = () => {
    const [product, setProduct] = useState({});
    
    const {id} = useParams();
    
    
    useEffect(() => {
      if (id) {
        _Services.getProductID(Number(id)).then(res => {
          const r = res
          setProduct(r)
        }).catch(error => {
          console.warn(error)
        })
      }
    }, [product, id]);
  
  
  
    return (
      <div className="max-w-6xl mx-auto p-4">
        <CardP className="grid md:grid-cols-2 gap-8 p-6">
          <ProductImage 
            imageUrl={product.images}  
          />
          <ProductDetails
            {...product}
            selectedSize={product.sizes}
            selectedColor={product.colors}
            onSizeChange={product.sizes}
            onColorChange={product.colors}
          />
        </CardP>
      </div>
    );
  };
  
  export default ProductPage;