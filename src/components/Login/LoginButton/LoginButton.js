import React, { useContext } from 'react';
import './LoginButton.css';
import { userContext } from '../../../App';
import { useHistory } from 'react-router';

const LoginButton = () => {
    const history = useHistory();
    const goToLogin = () => {
        history.push('/login');
    }
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <div onClick={goToLogin} className="login-icon">
                {loggedInUser?.isSignedIn ? loggedInUser?.name : "Login"}
            </div>
        </div>
    );
};

export default LoginButton;