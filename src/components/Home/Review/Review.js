import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import userImage from '../../../Images/peopleicon.png';
import './Review.css';

const Review = (props) => {
    const review = props.review;
    return (
        <Fade fraction={1} enter={true}>
            <div className="review">
                <div className="review-inner">
                    <div className="review-user-details">
                        <div className="userImage">
                            <img src={userImage} alt="" />
                        </div>
                        <div className="user-name">
                            {review.name}, {review.profession}
                        </div>
                    </div>
                    <div className="review-text">
                        {review.description}
                    </div>
                </div>

            </div>
        </Fade>
    );
};

export default Review;