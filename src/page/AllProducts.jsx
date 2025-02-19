import React from 'react'
import { Cardshtuki, CardTitle } from './ui/CardP'
import { useNavigate } from 'react-router-dom';
import Promo from './ui/Promo';




export default function AllProducts({ products }) {
  const navProduct = useNavigate();
  return (
    <div className="p-6 bg-white ">
      
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map(product => (
          <div
            key={product.id}
            style={{position:'relative'}}
            className="border rounded-lg p-1 text-center hover:shadow-xl transition"
            onClick={() => navProduct(`/products/${product.id}`)}
          >
            {Number(product.newPrice) > 0? <Promo/>: undefined}
            {product.images.slice(0, 1).map(img => (
              <img
                key={product.id}
                src={img.image}
                alt='img'
                style={{ width: '28rem'}}
                className="mx-auto mb-4"
              />
            ))}
            <CardTitle>{product.name}</CardTitle>
            <Cardshtuki text={product.stock} />
            <div>
              <p
                className="text-black-600 font-bold mt-2"
                style={{ textDecoration: Number(product.newPrice) > 0 ? 'line-through' : undefined }}>
                {product.price} грн</p>
              {products.newPrice_Yes_No ?
                undefined :
                <div >
                  {Number(product.newPrice) > 0 ? <h1 className='text-red-500 font-bold'>{product.newPrice} грн 🔥🔥🔥</h1> : undefined}
                </div>}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}
