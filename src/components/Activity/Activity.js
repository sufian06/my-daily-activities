import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {img, name, durationTime, description} = props.activity;

    const {handleAddToList} = props;
    // console.log(props)

    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className="activity-text">
                <h4>{name}</h4>
                <p>{description}</p>
                <p><small>Duration Time: {durationTime} minutes</small></p>
                <button onClick={() =>handleAddToList(durationTime)} className='list-btn'>Add to List</button>
            </div>
            
        </div>
    );
};

export default Activity;