import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faq-container">
            <div className='faq'>
                <div className="single-faq">
                    <h3>How does React work?</h3>
                    <p><span>Answer:</span>React is a component base UI library. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering the code.</p>
                </div>
                <div className="single-faq">
                    <h3>What is the difference between props & state?</h3>
                    <p><span>Answer:</span>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                </div>
                <div className="single-faq">
                    <h3>What does useEffect do?</h3>
                    <p><span>Answer:</span>useEffect update data after render. It is update data when change the dependency. Some other types of work we use useEffect as set timer, countdown</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;