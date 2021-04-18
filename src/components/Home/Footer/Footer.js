import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="connect-text">
                <a target="_blank" href="mailto:aaron45x@gmail.com">Say hi to me</a>
                <div>Code by <a target="_blank" href="https://github.com/rohittz">rohittz</a></div>
            </div>
            <div className="social">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faYoutube} />
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </div>
        </div >
    );
};

export default Footer;