import React from 'react';
import { useLocation } from 'react-router';

const Book = (props) => {
    const location = useLocation();
    const serviceTitle = location?.state?.service?.name;
    return (
        <div>
            {serviceTitle}
        </div>
    );
};

export default Book;