import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <div>
      <Link to="/" className="item">
      </Link>
      <div className="right menu">
        <Link to="/newslist" className="newslist">
          NewsList
        </Link>
        {
          props.user.jwt ? 
            <div onClick={() => {props.handleLogout()}}>
              <br/>
            <Link to="/login">Log out</Link>
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