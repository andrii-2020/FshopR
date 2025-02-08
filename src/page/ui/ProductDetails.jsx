import React from 'react';

import { SizeSelector } from './SizeSelector';
import { ColorSelector } from './ColorSelector';
import { Button } from './CardP';


export const ProductDetails = ({
  name,
  price,
  description,
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange
}) => (
  <div className="space-y-6 p-20">
    <div>
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-2xl font-semibold text-gray-700">{price} ₴</p>
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

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant='outline' style={{ display: 'flex' }}/>
    </div>
  </div>
);