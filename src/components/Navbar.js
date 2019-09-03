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
              <ul id="menu">
                <Link to="/newslist" className="nav-column"><li>News</li></Link>
                <Link to="/scrapbooks/" className="nav-column"><li>Scrapbook</li></Link>
                <Link to="/about" className="nav-column"><li>About</li></Link>
                <Link to="/login" className="nav-column" onClick={() => {props.handleLogout()}}><li>Log out</li></Link>
              </ul>
            </div>
          </nav>
          :
          <nav role="navigation">
            <div id="menuToggle">
              <ul id="menu">
                <Link to="/signin" className="nav-column"><li>Sign-up</li></Link>
                <Link to="/login" className="nav-column"><li>Login</li></Link>
                <Link to="/about" className="nav-column"><li>About</li></Link>
                <Link to="/newslist" className="nav-enter"><li>News</li></Link>
              </ul>
            </div>
          </nav>
        }
      </div>
    </div>
  );
};

export default withRouter(Navbar);
