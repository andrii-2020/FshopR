import React, { useState } from 'react';

export const SizeSelector = ({ sizes, onSizeChange,  }) => {

const [activeSize, setActiveSize] = useState(null);
  

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Розмір</h2>
      {sizes &&
        <div className="flex gap-3">
          {sizes.map((size, ind) => (
            <button
              
              style={{borderColor:activeSize === ind  ? 'blue': 'red'}}
              key={ind}
              className=
              'px-4 py-2 rounded border '
              onClick={() =>{ 
                onSizeChange(size.name)
                setActiveSize(ind)
              }}
            >
              {size.name}
            </button>
          ))}
        </div>
      }
    </div>
  )

};