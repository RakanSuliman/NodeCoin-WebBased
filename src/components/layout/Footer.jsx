import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 px-6 bg-background-light border-t-4 border-primary text-center">
            <p className="text-gray-400 text-sm">
                NodeCoin Web Implementation &copy; {new Date().getFullYear()}
            </p>
            <p className="mt-1 text-gray-500 text-xs">
                A cryptocurrency simulator built with React & Tailwind.
            </p>
        </footer>
    );
};

export default Footer;