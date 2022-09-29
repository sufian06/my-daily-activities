import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from "../About/About";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import SingleBreak from "../SingleBreak/SingleBreak";
import "./Layout.css";

const Layout = () => {
  const [activities, setActivities] = useState([]);
  const [breaks, setBreaks] = useState([]);
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  const notify = () => toast.success("Wow, your activities completed !", {
    position: "top-center"
  });

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

  

  const handleAddToList = (activity) => {
    setWorkTime((prevActivity) => prevActivity + activity);
  };
  
  const handleBreakTime = (time) => {
    setBreakTime(time);

    localStorage.setItem('storedBreakTime', JSON.stringify(time));
    
  };

  useEffect(()=>{
    const getStoredTime = localStorage.getItem('storedBreakTime');
    // setBreakTime(JSON.parse(getStoredTime));
    setBreakTime(JSON.parse(getStoredTime))
  }, [])

  return (
    <div>
      <div className="layout">
        <div className="layout-left">
          <Home
            activities={activities}
            handleAddToList={handleAddToList}
          ></Home>
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
                  handleBreakTime={handleBreakTime}
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
              <p>{workTime} Minutes</p>
            </div>
            <div className="break">
              <h4>Break Time</h4>
              <p>{breakTime} Minutes</p>
            </div>
          </div>
          <button onClick={notify} className="activity-btn">Activity Completed</button>
          {/* <ToastContainer /> */}
        </div>
      </div>
      <ToastContainer />
      <FAQ></FAQ>
    </div>
  );
};

export default Layout;
