import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
} from 'lucide-react';
import _Services from '../services';
import { CardP, CardContent, CardTitle } from './ui/CardP';








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
          <div className="grid grid-cols-4 gap-5 p-20"
            
          >

            {productsL.map(product => (
              <div
                key={product.id}
                className="p-1 text-center hover:shadow-xl transition "
                onClick={()=>{
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
                    <p className="text-blue-600 font-bold mt-2">{product.price} грн</p>
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
