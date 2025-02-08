import React from 'react';

export const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Розмір</h2>
      {sizes &&
        <div className="flex gap-3">
          {sizes.map(size => (
            <button
              key={size.id}
              className=
              'px-4 py-2 rounded border '
              onClick={() => onSizeChange(size.name)}
            >
              {size.name}
            </button>
          ))}
        </div>
      }
    </div>
  )

};