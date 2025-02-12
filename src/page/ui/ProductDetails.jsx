import React from 'react';

import { SizeSelector } from './SizeSelector';
import { ColorSelector } from './ColorSelector';



export const ProductDetails = ({
  name,
  price,
  description,
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
  newPrice,
  newPrice_Yes_No,
}) => (
  <div className="space-y-6 p-6">
    <div>
      <h1 className="text-3xl font-bold">{name}</h1>
      <div>
              <p
                className="text-2xl font-semibold text-gray-700"
                style={{ textDecoration: Number(newPrice) > 0 ? 'line-through' : undefined }}>
                {price} грн</p>
                
                {newPrice_Yes_No !== true ?
                  undefined :
                  <div >
                    {Number(newPrice) > 0 ? <h1 className='text-red-500 font-bold'>{newPrice} грн 🔥🔥🔥</h1> : undefined}
                  </div>}
            </div>
      
    </div>

    <div>
      <h4 className="text-gray-600">{description}</h4>
    </div>

    <SizeSelector
      sizes={sizes}
      selectedSize={selectedSize}
      onSizeChange={onSizeChange}
    />

    <ColorSelector
      colors={colors}
      selectedColor={selectedColor}
      onColorChange={onColorChange}
    />

  </div>
);