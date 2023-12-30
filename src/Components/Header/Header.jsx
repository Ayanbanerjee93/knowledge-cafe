import React from 'react';
import './Header.css';
import profile_image from '../../../images/profile.png'

const Header = () => {
    return (
        <nav>
              <div className="header">

            <div>
                <h1>Knowledge Cafe</h1>
            </div>

            <div className="nav-container">
                   {/* nav menu div */}
            <div className="nav-menu">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/visit">Visit Us</a>
                <a href="/login">Login</a>

             </div>
                    
                    {/* image div */}
                <img src={profile_image} srcSet="" />
               
            </div>
            </div>

                <hr />        
             
        </nav>
        
            
    );
};

export default Header;