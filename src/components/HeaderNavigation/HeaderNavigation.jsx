import React from 'react';
import NavBar from '../UI/NavBar/NavBar';
import NavLinkActive from '../UI/NavLinkActive/NavLinkActive';
import './HeaderNavigation.css'

const HeaderNavigation = () => {
    return (
        <NavBar className={"header-nav"}>
            <NavLinkActive to={"/"} className={"header-nav__elem"} activeClassName={"header-nav__elem_active"}>Главная</NavLinkActive>
        </NavBar>
    );
};

export default HeaderNavigation;