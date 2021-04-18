import React, { useContext } from 'react';
import { historyContext } from '../../../App';
import './Navbar.css'

const Navbar = () => {
    const [currComp, setCurrComp] = useContext(historyContext);
    return (
        <div className="navbar-container">
            <div className={`nav-block ${currComp === '/home' ? "marknv" : "nomarknv"}`}>Home</div>
            <div className={`nav-block ${currComp === '/projects' ? "marknv" : "nomarknv"}`}>Projects</div>
            <div className={`nav-block ${currComp === '/admin' ? "marknv" : "nomarknv"}`}>Admin</div>
        </div>
    );
};

export default Navbar;