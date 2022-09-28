import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activityData.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div>
            <h2>Select Today's Activity: {activities.length}</h2>
            <div className="activity-container">
            {
                activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>)
            }
            </div>
        </div>
    );
};

export default Activities;