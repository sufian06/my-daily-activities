import React, { useEffect, useState } from "react";
import About from "../About/About";
import Home from "../Home/Home";
import SingleBreak from "../SingleBreak/SingleBreak";
import "./Layout.css";

const Layout = () => {
  const [activities, setActivities] = useState([]);
  const [breaks, setBreaks] = useState([]);

  useEffect(() => {
    fetch("activityData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  useEffect(() => {
    fetch("breaksTime.json")
      .then((res) => res.json())
      .then((data) => setBreaks(data));
  }, [breaks]);

  return (
    <div className="layout">
      <div className="layout-left">
        <Home activities={activities}></Home>
      </div>
      <div className="layout-right">
        <About></About>
        {/* break area */}
        <div className="break-container">
            <h2>Add a Break</h2>
          <div className="break">
          {breaks.map((singleBreak) => (
            <SingleBreak
              key={singleBreak.id}
              time={singleBreak.duration}
            ></SingleBreak>
          ))}
          </div>
        </div>
        {/* break end */}
        {/* duration details */}
        <div className="duration-details">
            <h2>Duration Details</h2>
            <div className="break">
                <h4>Work Time</h4>
                <p>2000 s</p>
            </div>
            <div className="break">
                <h4>Break Time</h4>
                <p>20 s</p>
            </div>
        </div>
        <button className="activity-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Layout;
