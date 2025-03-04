import React from 'react';


const Button = ({children, onClick, type = 'button', disabled  = false, variant = 'primary'}) => {
    const base = "py-2 px-4 font-bold rounded border-b-4 transition-all active:border-t-4 active:border-t-4 active:border-b-0 focus:outline-none cursor-pointer";

    const variantClasses = {
        primary: "bg-primary hover:bg-primary-dark text-white border-primary-dark hover:border-primary",
        secondary: "bg-secondary hover:bg-yellow-600 text-white border-yellow-700 hover:border-yellow-800",
        danger: "bg-red-500 hover:bg-red-600 text-white border-red-700 hover:border-red-800",
    };

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${variantClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {children}
        </button>
    );
};

export default Button;