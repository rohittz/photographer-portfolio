import React, { useEffect, useState } from 'react';
import aaronFront from '../../../Images/aaron-front.png';
import aaronBack from '../../../Images/aaron-back.jpg';
import './Parallax.css';

const Parallax = () => {
    let [offset, setoffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setoffset(window.pageYOffset);
            const name = document.getElementById("aaron-name");
            const backPart = document.getElementById("aaron-back");
            const frontPart = document.getElementById("aaron-front");
            backPart.style.marginTop = -offset * 0.1 + 'px';
            name.style.marginTop = offset * 1 + 'px';
            frontPart.style.marginTop = offset * 0.1 + 'px';
        }
    });
    let value = offset;
    return (
        <div className="col-12 parallax">
            <img className="image-fluid" src={aaronFront} id="aaron-front" alt="aaronFront" />
            <img className="image-fluid" id="aaron-back" src={aaronBack} alt="aaronBack" />
            <h2 id="aaron-name">Aaron Stanley</h2>
        </div>
    );
};

export default Parallax;