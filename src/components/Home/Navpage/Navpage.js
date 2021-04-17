import React, { useState } from 'react';
import './Navpage.css';
const Navpage = () => {
    const [showMenu, setShowMenu] = useState({ display: "none" });
    const showNavPage = () => {
        const bar1 = document.getElementsByClassName('bar1')[0];
        const bar2 = document.getElementsByClassName('bar2')[0];
        const navPage = document.getElementsByClassName('navpage')[0];
        const navIcon = document.getElementsByClassName('nav-icon')[0];
        navPage.style.opacity = "0";
        const newShow = { ...showMenu };
        if (showMenu.display === "none") {
            newShow.display = "block";
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
        }, 300);
        setTimeout(() => {
            navPage.style.opacity = "1";
        }, 320);

    }
    return (
        <div>
            <div onClick={showNavPage} className="nav-icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
            </div>
            <div style={showMenu} className="navpage">

            </div>
        </div>
    );
};

export default Navpage;