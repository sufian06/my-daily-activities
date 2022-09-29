import React from 'react';
import './SingleBreak.css';

const SingleBreak = ({time, handleBreakTime}) => {
    return (
        <div className='singleBreak'>
            <button onClick={() => handleBreakTime(time)}>{time}m</button>
        </div>
    );
};

export default SingleBreak;