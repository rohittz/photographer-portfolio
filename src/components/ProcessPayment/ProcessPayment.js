import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import './ProcessPayment.css';
const stripePromise = loadStripe(
    'pk_test_51IegQVIXbkiXhA81qzT5hRxNf4G95VSk4hQPcT56hrj5k7ha7D6WYXnjgdfW1oCzTag1uniWmSUcy57vfWHp3V8X000kPxKhLc'
);

const ProcessPayment = (props) => {
    const { serviceTitle, servicePrice } = props?.service;
    return (
        <div className="payment-tab inputfield">
            <Elements stripe={stripePromise}>
                <CheckoutForm service={{ servicePrice, serviceTitle }} ></CheckoutForm>
            </Elements>
        </div >
    );
};

export default ProcessPayment;