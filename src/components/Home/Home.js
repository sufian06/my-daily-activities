import React from 'react';
import Activities from '../Activities/Activities';
import Nav from '../Nav/Nav';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Nav></Nav>
            <h2>Home</h2>
            <Activities></Activities>
        </div>
    );
};

export default Home;