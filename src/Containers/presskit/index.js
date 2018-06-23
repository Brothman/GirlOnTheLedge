import React from 'react';
import {browserHistory} from 'react-router';
import './index.css'
import Header from '../../Components/Header';

class presskit extends React.Component {
  render() {
    return (
      <div className="myPressKit">
        <Header />
      <div className="fuller-page">
        <h1 className="coming-soon"> Coming Soon! </h1>
      </div>
      </div>
    );
  }
}

export default presskit;
