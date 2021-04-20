import React, { useContext } from 'react';
import { menuContext } from '../../App';
import './MenuButton.css';

const MenuButton = () => {

    const [showMenu, setShowMenu] = useContext(menuContext);
    const toggleNavPage = () => {
        const bar1 = document.getElementsByClassName('bar1')[0];
        const bar2 = document.getElementsByClassName('bar2')[0];
        const navBarContainer = document.getElementsByClassName('navbar-container')[0];
        const navPage = document.getElementsByClassName('navpage')[0];
        const navIcon = document.getElementsByClassName('nav-icon')[0];
        navPage.style.opacity = "0";
        navBarContainer.style.transform = "scale(1.3)";
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
        }, 220);
        setTimeout(() => {
            navPage.style.opacity = "1";
            navBarContainer.style.transform = "scale(1)";
        }, 230);

    }
    return (
        <div>
            <div onClick={toggleNavPage} className="nav-icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
            </div>
        </div>
    );
};

export default MenuButton;