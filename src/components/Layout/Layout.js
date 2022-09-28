import React from 'react';
import Home from '../Home/Home';
import './Layout.css';

const Layout = () => {
    return (
        <div className='layout'>
            <div className="layout-left">
                <Home></Home>
            </div>
            <div className="layout-right">
                <h2>Right sight</h2>
            </div>
        </div>
    );
};

export default Layout;