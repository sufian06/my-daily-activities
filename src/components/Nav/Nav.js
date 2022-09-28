
import { faSnowboarding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
       
        <h4 className="logo">
          <FontAwesomeIcon className='icon' icon={faSnowboarding} />
          My Daily Activities
        </h4>
      </nav>
    </div>
  );
};

export default Nav;
