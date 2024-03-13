import React from 'react';
import './Navigation-Style.css'
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
    <body>

    <nav class="navbar">
        <div class="nav-items">
            <a href="#home"> Wheel of PMBOK !</a>
            <div class="dropdown">
                <button class="dropbtn">Study Set Selection
                    <i class="arrow down"></i>
                </button>
                <div class="dropdown-content">
                      {/* Use Link for client-side routing or modify href for traditional navigation */}
                        <Link to='/DataSet1'>Set 1</Link>
                        <Link to='/DataSet2'>Set 2</Link>
                        <Link to='/DataSet3'>Set 3</Link>
                        <Link to='/DataSet4'>Set 4</Link>
                        <Link to='/DataSet5'>Set 5</Link>
                </div>
            </div>
        </div>
    </nav>
    
    </body>    
    );
}

export default NavigationBar;
