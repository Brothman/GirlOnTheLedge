import React from 'react';
import {Link} from 'react-router';
import './index.css';

class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        <Link className="link" to='/'>
          <div className="tab home">
            HOME
          </div>
        </Link>
        <Link className="link" to="/trailer">
          <div className="tab trailer">
            TRAILER
          </div>
        </Link>
        <Link className="link" to="/synopsis">
          <div className="tab synopsis">
            SYNOPSIS
          </div>
        </Link>
        <Link className="link" to='/presskit'>
            <div className="tab presskit">
            PRESS KIT
            </div>
        </Link>
        <Link className="link" to='/contact'>
            <div className="tab contact">
            CONTACT
            </div>
        </Link>
        <Link className="link" to='/donate'>
            <div className="tab donate">
            DONATE
            </div>
        </Link>
      </div>
    )
  }
}

export default Header;
