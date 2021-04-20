import { useControlled } from '@material-ui/core';
import React, { useContext } from 'react';
import { userContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Login from '../Login/Login';
import './LoginButton.css';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        minWidth: '340px',
        minHeight: '340px',
        backgroundColor: 'rgba(26, 35, 53, 1)',
        color: 'var(--main-text)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
const LoginButton = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div onClick={handleOpen} className="login-icon">
                {loggedInUser?.isSignedIn ? loggedInUser?.name : "Login"}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Login toggle={handleClose}></Login>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default LoginButton;