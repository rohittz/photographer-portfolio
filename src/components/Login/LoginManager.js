import React, { useContext } from 'react';
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import "firebase/auth";
import { userContext } from '../../App';
export const initializeFirebaseApp = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }
};
const getIdToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        sessionStorage.setItem('token', idToken);
    }).catch(function (error) {
        // Handle error
    });

}
export const handleGoogleSignIn = () => {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(providerGoogle)
        .then((result) => {
            const { displayName, photoURL, email } = result.user;
            const signedUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                role: 'admin'
            }
            getIdToken();
            return signedUser;
        }).catch((error) => {
            const { code, message } = error;
            const errorInfo = {
                isErrorOccured: true,
                code: code,
                message: message
            }
            return errorInfo;
        });

}