import React, { useState } from 'react';
import Navpage from '../Navpage/Navpage';
import Parallax from '../Parallax/Parallax';
import './Header.css';
const Header = () => {

    return (
        <div className="header">
            <Navpage></Navpage>
            <Parallax></Parallax>
        </div>
    );
};

export default Header;