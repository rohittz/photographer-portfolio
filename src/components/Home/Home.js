import React from 'react';
import Header from './Header/Header';
import Service from './Service/Service';
import wedding from '../../Images/wedding.jpg';
import travel from '../../Images/travel.jpg';
import commercial from '../../Images/commercial.jpg';
import documentary from '../../Images/documentary.jpg';
import peopleIcon from '../../Images/peopleicon.png';
import './Home.css';
import Review from './Review/Review';
import About from './About/About';
const services = [
    {
        name: "Wedding",
        image: wedding,
        price: "200",
        details: " Praesent et faucibus tortor. Nunc libero erat, gravida eu posuere eu, sodales et urna. Nulla ornare diam id nunc pulvinar, sit amet imperdiet velit pulvinar."
    },
    {
        name: "Travel",
        image: travel,
        price: "400",
        details: " Praesent et faucibus tortor. Nunc libero erat, gravida eu posuere eu, sodales et urna. Nulla ornare diam id nunc pulvinar, sit amet imperdiet velit pulvinar."
    },
    {
        name: "Commercial",
        image: commercial,
        price: "200",
        details: " Praesent et faucibus tortor. Nunc libero erat, gravida eu posuere eu, sodales et urna. Nulla ornare diam id nunc pulvinar, sit amet imperdiet velit pulvinar."
    },
    {
        name: "Documentary",
        image: documentary,
        price: "300",
        details: " Praesent et faucibus tortor. Nunc libero erat, gravida eu posuere eu, sodales et urna. Nulla ornare diam id nunc pulvinar, sit amet imperdiet velit pulvinar."
    }
];
const reviews = [
    {
        name: 'Mr. Reftel Nickolas',
        image: peopleIcon,
        star: 4,
        details: "Duis semper accumsan molestie. Donec tincidunt elit vitae augue aliquet, id ultricies lorem tincidunt. Curabitur pharetra nunc vitae elit venenatis, ac iaculis felis lobortis."
    },
    {
        name: 'Mr. Reftel Nickolas',
        image: peopleIcon,
        star: 4,
        details: "Duis semper accumsan molestie. Donec tincidunt elit vitae augue aliquet, id ultricies lorem tincidunt. Curabitur pharetra nunc vitae elit venenatis, ac iaculis felis lobortis."
    },
    {
        name: 'Mr. Reftel Nickolas',
        image: peopleIcon,
        star: 4,
        details: "Duis semper accumsan molestie. Donec tincidunt elit vitae augue aliquet, id ultricies lorem tincidunt. Curabitur pharetra nunc vitae elit venenatis, ac iaculis felis lobortis."
    }
]
const Home = () => {
    return (
        <div className="home">
            {/* header */}
            <Header></Header>
            {/* services */}
            <div className="section-title">
                Services
            </div>
            <div className="services">

                {
                    services.map(service =>
                        <Service service={service}></Service>)
                }
            </div>
            {/* about */}
            <div className="about-section">
                <About></About>
            </div>
            {/* testimonials */}
            <div className="section-title">
                Some Impressions
            </div>
            <div className="testimonials">
                <div className="testimonials-inner">
                    {
                        reviews.map(review =>
                            <Review review={review}></Review>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;