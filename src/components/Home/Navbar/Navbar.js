import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import { historyContext, userContext } from '../../../App';
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
        history.push('/home')
        setCurrComp('/projects');
        console.log(currComp);
    }
    const goToDashboard = () => {
        props?.toggle();
        history.push('/dashboard');
        setCurrComp('/dashboard');
    }
    const [currComp, setCurrComp] = useContext(historyContext);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="navbar-container">
            <div onClick={goToHome} className={`nav-block ${currComp === '/home' ? "marknv" : "nomarknv"}`}>Home</div>
            <a href="#projects" id="onpage-link">
                <div onClick={goToProjects} className={`nav-block ${currComp === '/projects' ? "marknv" : "nomarknv"}`}> Projects</div></a>
            <div onClick={goToDashboard} className={`nav-block ${currComp === '/dashboard' ? "marknv" : "nomarknv"}`}>{loggedInUser?.role == "admin" ? "Admin" : "Dashboard"}</div>
        </div>
    );
};

export default Navbar;