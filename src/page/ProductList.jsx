import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
} from 'lucide-react';

import { CardP, CardContent, CardTitle, Cardshtuki } from './ui/CardP';
import _Services from "../services";

export default function ProductList() {
  const [productsL, setProductsL] = useState([]);
  const [mouseEntry, setMouseEntry] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {

      _Services.getProductsLists(Number(id)).then(val => {
        setProductsL(val)
      }).catch(error => {
        console.warn(error)
      })

    }
  }, [id, productsL]);


  return (
    <div>

      {
        productsL.length > 0 &&
        <div>

          <div style={{ textAlign: 'center', width: '180px', display: 'flex', padding: 20 }}>
            <code style={{ paddingTop: 7, paddingRight: 10 }}>Go Home</code>
            <HomeIcon
              size={40}
              color={mouseEntry ? 'blue' : 'black'}
              onMouseEnter={() => { setMouseEntry(true) }}
              onMouseLeave={() => { setMouseEntry(false) }}
              onClick={() => {
                navigate('/');
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"

          >

            {productsL.map(product => (
              <div
                key={product.id}
                className="p-1 text-center hover:shadow-xl transition "
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                <CardP>
                  <CardContent>
                    {product.images.slice(0, 1).map(img => (
                      <img
                        key={product.id}
                        src={img.image}
                        alt='img'
                        className="mx-auto mb-4 w-40 h-40 object-cover"
                      />
                    ))}

                    <CardTitle>{product.name}</CardTitle>
                    <Cardshtuki text={product.stock} />
                    <div>
                      <p
                        className="text-black-600 font-bold mt-2"
                        style={{ textDecoration: Number(product.newPrice) > 0 ? 'line-through' : undefined }}>
                        {product.price} грн</p>
                      {product.newPrice_Yes_No !==true?
                        undefined :
                        <div >
                          {Number(product.newPrice) > 0 ? <h1 className='text-red-500 font-bold'>{product.newPrice} грн 🔥🔥🔥</h1> : undefined}
                        </div>}
                    </div>
                   
                  </CardContent>
                </CardP>
              </div>
            ))}

          </div>
        </div>
      }
    </div>
  )
}
