import React from 'react';
import {
  CirclePlus
} from 'lucide-react';
const cn = (...classes) => classes.filter(Boolean).join(' ');


export const CardP = ({ children, className, ...props }) => (
  <div
    className="rounded-lg border bg-white text-gray-900 shadow-sm"
    {...props}
  >
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h3
    className="text-2xl font-semibold leading-none tracking-tight  "

    {...props}
  >
    {children}
  </h3>
);


export const CardContent = ({ children, className, ...props }) => (
  <div
    className="p-4"
    {...props}
  >
    {children}
  </div>
);



export const Button = ({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 bg-white hover:bg-gray-100 m-5",
    ghost: "hover:bg-gray-100"
  };

  const sizeStyles = {
    default: "px-4 py-2 text-base",
    sm: "px-3 py-1 text-sm",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={cn(
        "rounded-md transition-colors focus:outline-none focus:ring-2",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '150px' }}>
        <code>Add to Card</code>
        <CirclePlus />
      </div>
    </button>
  );
};



export const Label = ({ children, className, ...props }) => (
  <label
    className={cn(
      "block text-sm font-medium text-gray-700",
      className
    )}
    {...props}
  >
    {children}
  </label>
);