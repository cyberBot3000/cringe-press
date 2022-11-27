import React from 'react';
import './ButtonAccent.css'

const ButtonAccent = ({type, children, className, onClick}) => {
    return (
        <button type={type} className={`button button_accent ${className}`} onClick={onClick}>{children}</button>
    );
};

export default ButtonAccent;