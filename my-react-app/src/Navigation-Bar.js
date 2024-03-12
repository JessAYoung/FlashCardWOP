import React from 'react';
import './Navigation-Style.css'

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
                    <a>Set 1</a>
                    <a>Set 2</a>
                    <a>Set 3</a>
                    <a>Set 4</a>
                    <a>Set 5</a>
                </div>
            </div>
        </div>
    </nav>
    
    </body>    
    );
}

export default NavigationBar;
