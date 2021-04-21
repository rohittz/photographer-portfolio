import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Buttonmat from '../../Buttonmat';
import loading from '../../../Images/loading.svg';
import './AddReview.css';
const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isReviewed, setIsReviewed] = useState(false);
    const [onGoing, setOnGoing] = useState(false);
    const clearInputs = () => {
        document.getElementById('reviewer').value = '';
        document.getElementById('user-prof').value = '';
        document.getElementById('review-des').value = '';
    }
    const handleAddReview = () => {
        const name = document.getElementById('reviewer').value;
        const profession = document.getElementById('user-prof').value;
        const description = document.getElementById('review-des').value;
        const newReview = { name, profession, description };
        setOnGoing(true);
        fetch('https://aaron-stanley.herokuapp.com/addreview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsReviewed(true);
                    setOnGoing(false);
                    clearInputs();
                    setTimeout(() => {
                        setIsReviewed(false);
                    }, 3000);
                }
            })
    }
    return (
        <div>
            {
                isReviewed &&
                <div className="addStatus">
                    Thank you for your review!
                </div>
            }
            <div className="book-container page-trans">

                {
                    <form className="formfield">
                        <input className="inputfield" type="text" name="user-name" id="reviewer" placeholder="Your name" />
                        <input className="inputfield" type="text" name="user-prof" id="user-prof" placeholder="Company or Profession" />
                        <textarea className="textareaData inputfield" placeholder="Description" id="review-des"></textarea>
                        <div className="button-container" onClick={handleAddReview}>

                            <Buttonmat text="Submit"></Buttonmat>
                        </div>
                        {
                            onGoing && <div className="loading"><img src={loading} alt="loading" /></div>
                        }
                    </form>
                }

            </div>
        </div>
    );
}

export default AddReview;