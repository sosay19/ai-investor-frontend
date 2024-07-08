import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <img src="/logo.svg" alt="Logo" className="h-8" />
            <h1 className="text-xl font-bold">AI Investment Advisor</h1>
        </header>
    );
};

export default Header;
