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
  const [currentIndex, setCurrentIndex] = useState(0);
  




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
  }, [product, id]);

  const onSizeChanges = (name) => {
    setSeletSize(name)

  }
  const onColorChanges = (name) => {
    setSeletColor(name)

  }




  return (
    <div className="max-w-6xl mx-auto p-4">
      <div style={{ textAlign: 'center', width: '180px', display: 'flex', position: 'absolute', zIndex: 99999 }}>
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
        <p style={{ textAlign: 'center', marginBottom: 10, color: 'red' }}>
          Вибери Розмір <span style={{ color: 'black' }}>{seletSize}</span> і Колір <span style={{ color: 'black' }}>{seletColor}</span>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            btnD={seletColor.length > 0 && seletSize.length > 0 ? false : true}
            variant='outline'
            style={{ display: 'flex' }}
            size='sm'
            onClick={() => { console.log(seletColor, seletSize) }}
          />
        </div>
      </CardP>

    </div>
  );
};

export default ProductPage;