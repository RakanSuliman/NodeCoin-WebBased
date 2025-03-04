import React from 'react';


const Card = ({children, title, className='', highlighted= false}) => {
    return (
        <div className={`bg-background-light rounded-lg ${highlighted  ? 'pixel-border animate-pulse-fast': 'border-2 border-primary'} p-4 shadow-lg ${className}`}>
            {title && (
                <h2 className="text-xl font-bold mb-4 text-primary border-b border-primary pb-2">
                    {title}
                </h2>
            )}
        {children}
            </div>
);
        };

export default Card;