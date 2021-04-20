import React, { useContext, useEffect, useState } from 'react';
import aaronFront from '../../../Images/aaron-front1.png';
import aaronBack from '../../../Images/aaron-back.jpg';
import './Parallax.css';
import { historyContext } from '../../../App';

const Parallax = () => {
    const [currComp, setCurrComp] = useContext(historyContext);
    let [offset, setoffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            console.log(window.pageYOffset);
            if (window.pageYOffset < 0) {
                setoffset(0);
            }
            else {
                setoffset(window.pageYOffset);
            }
            if (offset < 900) {
                const name = document?.getElementById("aaron-name");
                const backPart = document?.getElementById("aaron-back");
                const frontPart = document?.getElementById("aaron-front");
                //checking for null before assigning new value.
                if (backPart !== null || frontPart !== null) {
                    backPart.style.marginTop = -offset * 0.04 + 'px';
                    name.style.paddingTop = offset * 1 + 'px';
                    frontPart.style.marginTop = offset * 0.2 + 'px';
                }
            }
        }
    });
    let value = offset;
    return (
        <div className="parallax">
            <img className="image-fluid" src={aaronFront} id="aaron-front" alt="aaronFront" />
            <img className="image-fluid" id="aaron-back" src={aaronBack} alt="aaronBack" />
            <h2 id="aaron-name" >Aaron Stanley</h2>
        </div>
    );
};

export default Parallax;