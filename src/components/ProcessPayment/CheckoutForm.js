import React, { useContext, useMemo, useState } from 'react';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import './CheckoutForm.css';
import Buttonmat from '../Buttonmat';
import loading from '../../Images/loading.svg';
import { userContext } from '../../App';
const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    color: "rgba(255, 255, 255, 0.8)",
                    letterSpacing: "0.025em",
                    fontFamily: "Poppins, sans-serif",
                    "::placeholder": {
                        color: "rgba(255, 255, 255, 0.5)"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
    );

    return options;
};

const CheckoutForm = (props) => {
    const { serviceTitle, servicePrice } = props?.service;
    const [isBooked, setIsBooked] = useState(false);

    const [onGoing, setOnGoing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const saveNewPayment = (newPayment) => {
        setOnGoing(true);
        fetch('https://aaron-stanley.herokuapp.com/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPayment)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setOnGoing(false);
                    setIsBooked(true);
                    setTimeout(() => {
                        setIsBooked(false);
                    }, 3000);
                }
            })
    }
    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        const paymentId = payload?.paymentMethod.id;
        const date = new Date();
        const status = "pending";
        const newPayment = { ...loggedInUser, paymentId, servicePrice, serviceTitle, date, status };
        saveNewPayment(newPayment);
    };
    return (
        <form className="payment-form">
            {
                isBooked &&
                <div className="addStatus">
                    One Service is booked successfully
                </div>
            }
            <label>
                Card number
        <CardNumberElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <label>
                Expiration date
        <CardExpiryElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <label>
                CVC
        <CardCvcElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <div className="button-container" onClick={handleSubmit} disabled={!stripe}>

                <Buttonmat text="Book"></Buttonmat>
            </div>
            {
                onGoing && <div className="loading"><img src={loading} alt="loading" /></div>
            }
        </form>
    );
};

export default CheckoutForm;