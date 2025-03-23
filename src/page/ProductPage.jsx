import React, { useState, useEffect } from 'react';
import { Button, CardP } from './ui/CardP';
import { ProductImage } from './ui/ProductImage';
import { ProductDetails } from './ui/ProductDetails';
import { useParams, useNavigate } from 'react-router-dom';

import { HomeIcon } from 'lucide-react';
import _Services from "../services";



const ProductPage = () => {
  const [product, setProduct] = useState([]);
  
 const _goForm = useNavigate();



  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      _Services.getProductID(id).then(res => {
        setProduct(res)
      }).catch(error => {
        console.warn(error)
      })
    }
  }, [id]);



  return (
    <>
        {product &&
            <div className="max-w-6xl mx-auto">


                        <div style={{
                            textAlign: 'center',
                            width: '180px',
                            display: 'flex',
                            position: 'absolute',
                            zIndex: 99999,
                            padding: '18px'
                        }}>
                            <code style={{paddingTop: 7, paddingRight: 10, color: 'blue'}}>Go Home</code>
                            <HomeIcon
                                size={40}
                                color={'blue'}
                                onClick={() => {
                                    navigate('/');
                                }}
                            />
                        </div>
                        <CardP className="grid md:grid-cols-2 gap-8 p-6">
                            <div className="mySlides fade">
                                <ProductImage
                                    imageUrl={product.images}
                                />
                            </div>


                            <ProductDetails
                                {...product}
                                selectedSize={product.sizes}
                            />

                            <div style={{display: 'flex', justifyContent: 'center'}}>

                                <Button
                                    variant='outline'
                                    style={{display: 'flex', background: 'red', color: 'white'}}
                                    size='sm'
                                    onClick={() => {
                                        _goForm('/form', {
                                            state: {
                                                name: product.name,
                                                oldPrice: product.price,
                                                price: Number(product.newPrice) > 0 ? product.newPrice : product.price,
                                            }
                                        })
                                    }}
                                />
                            </div>
                        </CardP>


            </div>
        }
    </>
  );
};

export default ProductPage;