import React from 'react';
import {browserHistory} from 'react-router';
import './index.css'
import Header from '../../Components/Header';

/*
class trailer extends React.Component {
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
}*/



class trailer extends React.Component {
  render() {
    return (
      <div className="myPressKit">
        <Header />
        <div className='wrapper-div'>
          <iframe className="test-iframe" src="https://www.youtube.com/embed/tL9zyzn1HFk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}


export default trailer;
