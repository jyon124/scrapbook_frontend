import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="header"> 
      <div className="nav-bar-container">
        {
          localStorage.getItem('user') ? 
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <Link to="/newslist"><li>News</li></Link>
                  <Link to="/scrapbooks/"><li>Scrapbook</li></Link>
                  <Link to="/login" onClick={() => {props.handleLogout()}}><li>Log out</li></Link>
                </ul>
              </div>
            </nav>
          :
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <Link to="/login" className="nav">
                  <li>Login</li>
                </Link>
                <Link to="/signin" className="nav">
                  <li>Signup</li>
                </Link>
              </ul>
            </div>
          </nav>
        }
      </div>
    </div>
  );
};

export default withRouter(Navbar);
