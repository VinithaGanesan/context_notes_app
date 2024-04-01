import React from 'react';
import './AppLayout.css';
import Navbar from '../Components/Navbar/Navbar';

export default function AppLayout({ children }) {
    return (
        <div className="app-container">
            <div className="sidebar">
                <Navbar/>
            </div>
            <div className="content-container">
                {children}
            </div>
        </div>
    );
}
