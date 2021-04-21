import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { historyContext, userContext } from '../../../App';
import loading from '../../../Images/loading.svg';
import './BookingList.css'

const BookingList = () => {

    const [onGoing, setOnGoing] = useState(false);
    const history = useHistory();
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [currComp, setCurrComp] = useContext(historyContext);
    const goToServices = () => {
        history.push('/home');
        setCurrComp('/home');
    }
    useEffect(() => {
        setOnGoing(true);
        fetch('https://aaron-stanley.herokuapp.com/bookinglist?email=' + loggedInUser.email, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                setOnGoing(false);
                setBookings(data);
            })
    }, [loggedInUser.email]);
    return (
        <div className="bookinglist-container page-trans">
            {
                onGoing && <div className="loading"><img src={loading} alt="loading" /></div>
            }
            {

                bookings?.length > 0 ?
                    <table className="tableData">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Booking Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(book =>
                                    <tr>
                                        <td>{book.serviceTitle}</td>
                                        <td>{new Date(book.date).toDateString('DD/MM/YYYY')}</td>
                                        <td><span className={`status status-${book.status}`}>{book.status}</span></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    :
                    <a href="#services-tab" id="onpage-link">
                        <div onClick={goToServices}> Go to service tab to book new services</div>
                    </a>

            }
        </div>
    );
};

export default BookingList;
