import React, { useContext, useState } from 'react';
import './AddAdmin.css'
import Buttonmat from '../../Buttonmat';
import { userContext } from '../../../App';
const AddAdmin = () => {
    const clearInputs = () => {
        document.getElementById('user-email').value = '';
    }
    const [isAdded, setIsAdded] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const handleAddAdmin = (event) => {
        event.preventDefault();
        const adminEmail = document.getElementById("user-email").value;
        // performing post request to the server
        const newAdmin = { adminEmail, loggedInUser };
        fetch('https://aaron-stanley.herokuapp.com/addadmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmin)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsAdded(true);
                    clearInputs();
                    setTimeout(() => {
                        setIsAdded(false);
                    }, 3000);
                }
            })
    }
    const handleBlur = (event) => {
        const isvalid = /\S+@\S+\.\S+/.test(event.target.value);
        setIsEmailValid(isvalid);
    }
    return (
        <div className="book-container page-trans">
            <form className="formfield">
                <div className="inputbox">
                    <input onChange={handleBlur} className="inputfield" placeholder="Enter Email" type="email" name="user-email" id="user-email" />

                    {
                        !isEmailValid &&
                        <div id="condition">
                            Not Correct! Example: abc@gmail.com
                        </div>
                    }
                </div>
                <div className="button-container" onClick={handleAddAdmin}>

                    <Buttonmat text="Add"></Buttonmat>
                </div>
            </form>
            {
                isAdded &&
                <div className="addStatus">
                    One book added successfully!
                </div>
            }
        </div>

    );
};

export default AddAdmin;