import React from 'react';
import { Flip, Zoom, Slide, Fade } from 'react-awesome-reveal';
import './Review.css';

const Review = (props) => {
    const review = props.review;
    return (
        <Fade left fraction={0.5} enter={true}>
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