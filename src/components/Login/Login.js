import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { historyContext, userContext } from '../../App';
import { handleGoogleSignIn, initializeFirebaseApp } from './LoginManager';
import './Login.css';
import loading from '../../Images/loading.svg';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
    root: {
        background: 'var(--main-back-2)',
        borderRadius: 100,
        border: '2px solid gray',
        color: 'white',
        height: 48,
        padding: '0 30px'
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);
initializeFirebaseApp();
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [currComp, setCurrComp] = useContext(historyContext);
    const [onGoing, setOnGoing] = useState(false);
    const pastLocation = useLocation();
    const history = useHistory();
    let { from } = pastLocation.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        setOnGoing(true);
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                if (pastLocation.state) {
                    history.replace(from);
                }
                else {
                    history.push("/dashboard");
                    setCurrComp("/dashboard");
                }
                setOnGoing(false);
            })
    }
    return (
        <div className="login-container page-trans">
            <div className="login">
                <div className="login-message">
                    Let's log in...
            </div>
                <div className="login-third" onClick={googleSignIn}>
                    <StyledButton>
                        <span className="iconbox">
                            <FontAwesomeIcon className="google-icon" icon={faGoogle} />
                        </span>
                        <span className="third-text">Login with Google</span>
                    </StyledButton>
                </div>
                {
                    onGoing && <div className="loading"><img src={loading} alt="loading" /></div>
                }
            </div>
        </div>
    );
};

export default Login;