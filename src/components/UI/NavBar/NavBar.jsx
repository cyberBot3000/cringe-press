import React from 'react';
import './NavBar.css';

const NavBar = ({className, children}) => {
    return (
        <nav className={`nav-bar ${className}`}>
            {children}
        </nav>
    );
};

export default NavBar;