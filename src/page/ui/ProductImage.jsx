import React from 'react';


export const ProductImage = ({ imageUrl}) => (
  <div 
  className="aspect-square bg-gray-100 rounded-lg"
  style={{ maxWidth:'560px', margin: '0 auto', paddingTop: 15}}
  >
    {imageUrl &&
      <>
        {imageUrl.map(res => (
          <img 
          key={res.id}
          src={res.image} 
          alt={'altText'} 
          className="w-full h-full rounded-lg"
        />
        ))}
      </>
    }
  </div>
);