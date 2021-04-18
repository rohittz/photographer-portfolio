import React from 'react';
import './Gallery.css'
import animal1 from '../../../Images/gallery/animal1.jpg';
import animal2 from '../../../Images/gallery/animal2.jpg';
import animal3 from '../../../Images/gallery/animal3.jpg';
import architecture1 from '../../../Images/gallery/architecture1.jpg';
import architecture2 from '../../../Images/gallery/architecture2.jpg';
import architecture3 from '../../../Images/gallery/architecture3.jpg';
import experimental1 from '../../../Images/gallery/experimental1.jpg';
import nature1 from '../../../Images/gallery/nature1.jpg';
import nature2 from '../../../Images/gallery/nature2.jpg';
import nature3 from '../../../Images/gallery/nature3.jpg';
import nature4 from '../../../Images/gallery/nature4.jpg';
import nature5 from '../../../Images/gallery/nature5.jpg';
import people1 from '../../../Images/gallery/people1.jpg';
import people2 from '../../../Images/gallery/people2.jpg';
import people3 from '../../../Images/gallery/people3.jpg';
import street1 from '../../../Images/gallery/street1.jpg';
import tech1 from '../../../Images/gallery/tech1.jpg';
import Fade from 'react-reveal/Fade';
const Gallery = () => {
    return (
        <div className="gallery">
            <Fade big fraction={0.4}>
                <div className="gallery-col">
                    <img src={animal1} alt="animal" />
                    <img src={architecture1} alt="architecture" />
                    <img src={nature1} alt="nature" />
                    <img src={people2} alt="nature" />
                </div>
            </Fade>

            <Fade big fraction={0.2}>
                <div className="gallery-col">
                    <img src={tech1} alt="tech" />
                    <img src={people1} alt="people" />
                    <img src={animal2} alt="animal" />
                    <img src={people3} alt="people" />
                </div>
            </Fade>
            <Fade big fraction={0.4}>
                <div className="gallery-col">
                    <img src={animal3} alt="animal" />
                    <img src={experimental1} alt="experimental" />
                    <img src={architecture2} alt="architecture" />
                    <img src={architecture3} alt="architecture" />
                </div>
            </Fade>
            <Fade big fraction={0.4}>
                <div className="gallery-col">
                    <img src={nature3} alt="nature" />
                    <img src={nature5} alt="nature" />
                    <img src={nature2} alt="nature" />
                    <img src={street1} alt="street" />
                </div>
            </Fade>
        </div>
    );
};

export default Gallery;
