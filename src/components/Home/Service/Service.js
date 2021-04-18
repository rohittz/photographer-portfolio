import React from 'react';
import './Service.css';
import Zoom from 'react-reveal/Zoom';
const Service = (props) => {
    const service = props?.service;
    return (
        <Zoom fraction={0.5}>
            <div className="service">
                <div style={{
                    background: `url(${service.image})`, backgroundSize: "cover",
                    backgroundPosition: "center"
                }} className="service-inner">
                    <div className="service-title">
                        {service.name}
                    </div>
                    <div className="price">
                        <span>${service.price}</span>
                    </div>
                    <div className="book-btn">
                        Book
                    </div>
                </div>
            </div >
        </Zoom>
    );
};

export default Service;