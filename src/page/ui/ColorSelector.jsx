import React from 'react';

export const ColorSelector = ({ colors, selectedColor, onColorChange }) => {



 
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Колір</h2>
      <div style={{ 
        background: 'rgba(12, 11, 11, 0.50)', 
        borderRadius: 10, display: 'flex', 
        justifyContent: 'space-between'
         
        }}>
        
        {
          colors &&
          <div className="flex gap-3 p-5">
          {colors.map(color => (
            <div>
              <button
              key={color.id}
              className={` w-10 h-10 rounded-full border`}
              style={{ backgroundColor: color.hex_code }}
              onClick={() => onColorChange(color.hex_code)}
            />
            </div>
          ))}
        </div>
        }
      </div>
    </div>
  )
};