import React from 'react';
import Activities from '../Activities/Activities';
import Nav from '../Nav/Nav';
import './Home.css';

const Home = ({activities}) => {
    return (
        <div className='home'>
            <Nav></Nav>
            <Activities activities={activities}></Activities>
        </div>
    );
};

export default Home;