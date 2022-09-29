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
      </div>
    </div>
  );
};

export default Layout;
