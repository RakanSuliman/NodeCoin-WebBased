import React from 'react';
import App from "../../App";


const Header = () => {
    return (
        <header className="py-4 px-6 bg-background-light border-b-4 border-primary">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-primary">
                    <span className="text-4xl text-primary-dark">N</span>ode
                    <span className="text 4xl text-secondary">C</span>oin
                </h1>
                <p className="text-primary-dark mt-1">Cryptocurrency Simulator</p>
            </div>
        </header>
    );
};
export default Header;