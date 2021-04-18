import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { historyContext, userContext } from '../../App';
import { handleGoogleSignIn, initializeFirebaseApp } from './LoginManager';
import './Login.css';
initializeFirebaseApp();
const Login = (props) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [currComp, setCurrComp] = useContext(historyContext);
    const pastLocation = useLocation();
    useEffect(() => {
        setCurrComp("/login");
    })
    const history = useHistory();
    let { from } = pastLocation.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                if (pastLocation.state) {
                    history.replace(from);
                }
                else {
                    history.push("/home");
                    setCurrComp("/home");
                }

                props?.toggle();
            })
    }
    return (
        <div className="login">
            <div className="login-message">
                Let's log in...
            </div>
            <div className="login-third" onClick={googleSignIn}>
                <span className="iconbox">
                    <FontAwesomeIcon className="google-icon" icon={faGoogle} />
                </span>
                <span className="third-text">Login with Google</span>
            </div>
        </div>
    );
};

export default Login;