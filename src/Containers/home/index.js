import React from 'react';
import {browserHistory} from 'react-router';
import './index.css'
import Header from '../../Components/Header';
import Popup from 'reactjs-popup';
import YouTube from 'react-youtube';
import {  Button } from '@material-ui/core'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {purple} from '@material-ui/core/colors';
import {green} from '@material-ui/core/colors';
import {lightBlue} from '@material-ui/core/colors';
import createPalette from '@material-ui/core/styles/createPalette'



// const theme = createMuiTheme({
//   palette: createPalette({
//     primary: purple,
//     secondary: green,
//     error: purple,
//   })
// });


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#538fbe',
      dark: '#538fbe',
      contrastText: '#fff',
    }
}
});


class ContactPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = { open: false };
  }

  openModal = () => {
      this.setState({ open: true });
    };

  closeModal = () => {
      this.setState({ open: false });
  };

  render() {

    return (
      <div className="myLandingPage">
        <Header />
        <div className ="fullpage">
          <h1 className="title"> Girl on the Ledge </h1>
          <p className="author"> A Film by Paul Arthur Rothman </p>

          <MuiThemeProvider theme={theme}>
            <Button onClick={this.openModal} className="MDButton" style={{'margin-top': '6%'}}
               type='submit'
                variant='raised'
                color='primary'
             >
               Play Trailer
             </Button>
          </MuiThemeProvider>

            <Popup  open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}>
              <div className='wrapper-div-home'>
                <iframe className="test-iframe-home" src="https://www.youtube.com/embed/KFppTBdCse8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </Popup>
        </div>
      </div>
    );
  }
}

/* <Popup trigger={<button className="buttoner"> Play Trailer</button>}  modal="true" lockScroll="true">
  <div className='wrapper-div-home'>
    <iframe className="test-iframe-home" src="https://www.youtube.com/embed/KFppTBdCse8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</Popup> */

export default ContactPage;
