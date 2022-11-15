import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import WidthContainer from '../WidthContainer/WidthContainer';

const Header = () => {
    return (
        <div className='header'>
            <WidthContainer>
                <HeaderNavigation/>
            </WidthContainer>
        </div>
    );
};

export default Header;