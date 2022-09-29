import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import authorImage from '../../images/sufian.jpg';
import './About.css';
const About = () => {
    return (
        <div className='about'>
            <div className="img-name">
                <img src={authorImage} alt="" />
                <div className="img-name-text">
                    <h3>Abu Sufian</h3>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Tongi, Gazipur</p>
                </div>
            </div>
            <div className="about-details">
                <div className="about-details-single">
                    <h2>Company</h2>
                    <p>Nerolac Paints Ltd</p>
                </div>
                <div className="about-details-single">
                    <h2>Position</h2>
                    <p>Sr. Recovery Officer</p>
                </div>
            </div>
        </div>
    );
};

export default About;