import React from 'react';
import Header from './Header';
import Footer from './Footer';
import App from "../../App";


const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
    <Header/>
            <main className="flex-grow container mx-auto- py-6 px-4">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;