import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { historyContext } from '../../../App';
import './Navbar.css'

const Navbar = (props) => {
    let history = useHistory();
    const goToHome = () => {
        props?.toggle();
        history.push('/home');
        setCurrComp('/home')
    }
    const goToProjects = () => {
        props?.toggle();
        setCurrComp('/projects');
    }
    const [currComp, setCurrComp] = useContext(historyContext);
    return (
        <div className="navbar-container">
            <div onClick={goToHome} className={`nav-block ${currComp === '/home' ? "marknv" : "nomarknv"}`}>Home</div>
            <div onClick={goToProjects} className={`nav-block ${currComp === '/projects' ? "marknv" : "nomarknv"}`}><a href="#projects"> Projects</a></div>
            <div className={`nav-block ${currComp === '/admin' ? "marknv" : "nomarknv"}`}>Admin</div>
        </div>
    );
};

export default Navbar;