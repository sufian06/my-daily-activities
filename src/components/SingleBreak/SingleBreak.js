import React from 'react';
import './SingleBreak.css';

const SingleBreak = (props) => {
    return (
        <div className='singleBreak'>
            <button>{props.time}m</button>
        </div>
    );
};

export default SingleBreak;