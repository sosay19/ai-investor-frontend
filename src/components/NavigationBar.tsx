import React from 'react';

const NavigationBar: React.FC = () => {
    return (
        <nav className="flex justify-around p-4 bg-blue-500 text-white">
            <a href="#" className="hover:bg-blue-600 p-2 rounded">Dashboard</a>
            <a href="#" className="hover:bg-blue-600 p-2 rounded">Portfolio</a>
            <a href="#" className="hover:bg-blue-600 p-2 rounded">Transactions</a>
            <a href="#" className="hover:bg-blue-600 p-2 rounded">Profile</a>
        </nav>
    );
};

export default NavigationBar;
