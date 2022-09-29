import React from 'react';
import Activities from '../Activities/Activities';
import Nav from '../Nav/Nav';
import './Home.css';

const Home = ({activities, handleAddToList}) => {
    return (
        <div className='home'>
            <Nav></Nav>
            <Activities activities={activities} handleAddToList={handleAddToList}></Activities>
        </div>
    );
};

export default Home;