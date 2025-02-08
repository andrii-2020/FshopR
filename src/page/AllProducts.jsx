import React from 'react'
import { Button, CardTitle } from './ui/CardP'
import {useNavigate } from 'react-router-dom';




export default function AllProducts( { products}) {
  const navProduct = useNavigate();
  return (
    <div className="max-xl:flex-1 p-6 bg-white ">
        <div className={window.innerWidth <= 1000? "grid item":"grid grid-cols-5 gap-4 item"}>
          {products.map(product => (
            <div 
              key={product.id} 
              className="border rounded-lg p-1 text-center hover:shadow-xl transition"
              style={{minWidth: '20rem'}}
              onClick={()=> navProduct(`/products/${product.id}`)}
            >
              {product.images.slice(0,1).map(img =>(
                <img 
                key={product.id} 
                src={img.image} 
                alt='img' 
                style={{width: '28rem', height: '20rem'}}
                className="mx-auto mb-4"
              />
              ))}
              <CardTitle>{product.name}</CardTitle>
              <p className="text-blue-600 font-bold mt-2">{product.price} грн</p>
               
            </div>
          ))}
        </div>
      </div>
  )
}
