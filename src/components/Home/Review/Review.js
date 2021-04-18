import React from 'react';
import { Fade } from 'react-reveal';
import './Review.css';

const Review = (props) => {
    const review = props.review;
    return (
        <Fade fraction={1} enter={true}>
            <div className="review">
                <div className="review-inner">
                    <div className="review-user-details">
                        <div className="userImage">
                            <img src={review.image} alt="" />
                        </div>
                        <div className="user-name">
                            {review.name}
                        </div>
                    </div>
                    <div className="review-text">
                        {review.details}
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Review;