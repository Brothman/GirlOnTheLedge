import React from 'react';
import {browserHistory} from 'react-router';
import './index.css'
import Header from '../../Components/Header';

class donate extends React.Component {
  render() {
    return (
      <div className="myDonatePage">
        <Header />
          <img className="paul-photo" src={require("./dad-photo.jpeg")} height="400px" width="400px" />
          <div className ="donateInfoContainer">
            <p className="info description donated visible"> Dear friends, </p>
          <p className="info description donated visible"> After a career of making documentaries and several years of curating the Brooklyn Jewish Film Festival, my Dad, Paul Rothman, focused on his dream of making a feature movie. Against all odds, battling cancer and a myriad of other health issues, with a minimal budget financed with bank loans he was able to finish the filming and editing of Girl on the Ledge. When he passed away on the first night of Passover, all that was left to do was to finalize the sound track and color editing. </p>
        <p className="info description donated"> As a tribute to my Dad, his artistic brilliance, his strong will and love for life, I will complete the work he started. I am asking for donations to help me pay off the movie's debt, as well as to finance submissions to film festival. Every dollar helps. </p>
            <p className="info description donated"> With gratitude, </p>
          <p className="info description donated less-margin"> Ben Rothman </p>

        <a href="https://www.gofundme.com/help-finish-gotl" className="buttoner buttoner-email buttoner-donate">Donate</a>
          </div>
      </div>
    );
  }
}

export default donate;
