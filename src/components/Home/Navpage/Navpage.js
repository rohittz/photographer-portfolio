import React, { createContext, useContext, useState } from 'react';
import { menuContext } from '../../../App';
import Navbar from '../Navbar/Navbar';
import './Navpage.css';
const Navpage = () => {
    const [showMenu, setShowMenu] = useContext(menuContext);
    const toggleNavPage = () => {
        const bar1 = document.getElementsByClassName('bar1')[0];
        const bar2 = document.getElementsByClassName('bar2')[0];
        const navPage = document.getElementsByClassName('navpage')[0];
        const navIcon = document.getElementsByClassName('nav-icon')[0];
        navPage.style.opacity = "0";
        const newShow = { ...showMenu };
        if (showMenu.display === "none") {
            newShow.display = "flex";
            navIcon.style.rowGap = "0px";
            bar1.style.transform = "rotateZ(45deg)";
            bar2.style.transform = "rotateZ(-45deg)";
        }
        else {
            newShow.display = "none";
            navIcon.style.rowGap = "5px";
            bar1.style.transform = "rotate(0deg)";
            bar2.style.transform = "rotate(0deg)";
        }
        setTimeout(() => {
            setShowMenu(newShow);
        }, 250);
        setTimeout(() => {
            navPage.style.opacity = "1";
        }, 260);

    }
    return (
        <div>
            <div onClick={toggleNavPage} className="nav-icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
            </div>
            <div style={showMenu} className="navpage">
                <Navbar toggle={toggleNavPage}></Navbar>
            </div>
        </div>
    );
};

export default Navpage;