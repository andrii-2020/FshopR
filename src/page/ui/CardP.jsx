import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');


export const CardP = ({ children, className, ...props }) => (
  <div
    className="rounded-lg border bg-white text-gray-900 shadow-sm"
    {...props}
  >
    {children}
  </div>
);




export const Cardshtuki = ({ children, text }) => (
  <h4 style={{ marginTop: 5, fontSize: 14 }}>
    styk v nalichii - <span className='shtyki'>{text}</span>
  </h4>
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
  btnD,
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 bg-white hover:bg-gray-100 m-1",
    ghost: "hover:bg-gray-100"
  };

  const sizeStyles = {
    default: "px-4 py-2 text-base",
    sm: "px-0 py-0 text-sm",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      disabled={btnD}
      className={cn(
        "rounded-md transition-colors focus:outline-none focus:ring-2",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: 5 }}>
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          {btnD ? 
          <span className="relative inline-flex size-3 rounded-full bg-red-500"></span> : 
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>}
        </span>
        <code className='p-2'>Замовити</code>
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