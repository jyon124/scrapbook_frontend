import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <div>
      <div>
        {
          localStorage.getItem('user') ? 
          <div>
            <Link to="/newslist" className="newslist">
              News
            </Link>
            <br/>
            <Link to="#" className="scrapbook">
              Scrapbook
            </Link>
            <div onClick={() => {props.handleLogout()}}>
              <br/>
              <Link to="/login">Log out</Link>
            </div>
          </div>
          :
          <div>
            <Link to="/login" className="item">
              <div className="ui primary button">Login</div>
            </Link>
            <Link to="/signin" className="item">
              <div className="ui primary button">Signin</div>
            </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default withRouter(Navbar);