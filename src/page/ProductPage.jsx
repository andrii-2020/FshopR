import React, { useState, useEffect } from 'react';
import { Button, CardP } from './ui/CardP';
import { ProductImage } from './ui/ProductImage';
import { ProductDetails } from './ui/ProductDetails';
import { useParams, useNavigate } from 'react-router-dom';
import _Services from '../services';
import { HomeIcon } from 'lucide-react';



const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [seletSize, setSeletSize] = useState('');
  const [seletColor, setSeletColor] = useState('');
  
 const _goForm = useNavigate();



  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      _Services.getProductID(Number(id)).then(res => {
        const r = res
        setProduct(r)
      }).catch(error => {
        console.warn(error)
      })
    }
  }, [id]);

  const onSizeChanges = (name) => {
    setSeletSize(name)

  }
  const onColorChanges = (name) => {
    setSeletColor(name)

  }




  return (
    <div className="max-w-6xl mx-auto">
       
      <div style={{ textAlign: 'center', width: '180px', display: 'flex', position: 'absolute', zIndex: 99999, padding: '18px' }}>
        <code style={{ paddingTop: 7, paddingRight: 10 }}>Go Home</code>
        <HomeIcon
          size={40}
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
          selectedColor={product.colors}
          onSizeChange={onSizeChanges}
          onColorChange={onColorChanges}
        />
        {seletColor.length >= 0 && seletSize.length >= 0 ?
        <p style={{ textAlign: 'center', marginBottom: 10, color: 'red' }}>
          Вибери Розмір:  
          <span style={{ color: 'black' }}>{ seletSize ? ' ' + seletSize + ' '  : ' ??? '}</span> 
           і Колір:  <span style={{ color: 'black' }}>{ seletColor ? seletColor:' ??? '}</span>
        </p>: <>dwdwdwd</>}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          
          <Button
            btnD={seletColor.length > 0 && seletSize.length > 0 ? false : true}
            variant='outline'
            style={{ display: 'flex', background: 'red', color: 'white' }}
            size='sm'
            onClick={() => { _goForm('/form', {
              state: {
                color:seletColor, 
                size: seletSize,
                name: product.name,
                oldPrice: product.price,
                price: Number(product.newPrice) > 0? product.newPrice: product.price,
              }
            }) }}
          />
        </div>
      </CardP>
         
    </div>
  );
};

export default ProductPage;