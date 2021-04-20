import React, { useContext, useState } from 'react';
import Parallax from '../Parallax/Parallax';
import './Header.css';
// making login button work
const Header = () => {
    return (
        <div className="header">
            {/* moving the login button in the menu component to make it fixed always for all component */}
            <Parallax></Parallax>
        </div>
    );
};

export default Header;