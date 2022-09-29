import React from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = ({activities, handleAddToList}) => {
    
    return (
        <div>
            <h2>Select Today's Activities</h2>
            <div className="activity-container">
            {
                activities.map(activity => <Activity handleAddToList={handleAddToList} key={activity.id} activity={activity}></Activity>)
            }
            </div>
        </div>
    );
};

export default Activities;