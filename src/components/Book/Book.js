import React from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { historyContext, userContext } from '../../App';
import './Book.css';
import Buttonmat from '../Buttonmat';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
let serviceTitle = '';
let servicePrice = '';
const Book = (props) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [currComp, setCurrComp] = useContext(historyContext);
    const location = useLocation();
    if (location?.state?.service !== undefined) {
        serviceTitle = location?.state?.service?.name;
        servicePrice = location?.state?.service?.price;
    }
    const goToServices = () => {
        history.push('/home');
        setCurrComp('/home');
    }
    return (
        <div className="book-container page-trans">
            {
                location?.state?.service !== undefined ?
                    <form className="formfield">
                        <input className="inputfield" type="text" name="user-name" value={loggedInUser.name} id="booker-name" />
                        <input className="inputfield" type="email" name="user-email" id="booker-email" value={loggedInUser.email} />
                        <div className="inputGroup">
                            <input type="text" className="inputfield" name="service-name" id="service-name" value={serviceTitle} readOnly />
                            <input type="text" className="inputfield" name="service-price" id="service-price" value={`$${servicePrice}`} readOnly />
                        </div>
                        <ProcessPayment service={{ serviceTitle, servicePrice }}></ProcessPayment>
                    </form>
                    :
                    <a href="#services-tab" id="onpage-link">
                        <div onClick={goToServices}> Go to service tab to book new services</div>
                    </a>
            }
        </div>
    );
};

export default Book;