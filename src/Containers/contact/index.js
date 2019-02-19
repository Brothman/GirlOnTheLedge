import React from 'react';
import './index.css'
import Header from '../../Components/Header';
import Popup from 'reactjs-popup';
import { Button } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
  
  render() {
    let testHTML = 
    <form method="get" action="https://www.gofundme.com/help-finish-gotl">
      <MuiThemeProvider theme={theme}>
        <Button onClick={e => e.preventDefault() }className="MDButton" style={{ 'margin-top': '6%' }}
          type='submit'
          variant='raised'
          color='primary'
        >
          Join Our Mailing List
              </Button>
      </MuiThemeProvider>
    </form>
  ;
    return (
      <div className="myContactPage">
        <Header />
      <img className="ben-photo" src={require("./ben.jpg")} height="400px" width="400px" />
        <div className ="contactInfoContainer">
          <h3 className="info"> Email: brothman7000@gmail.com </h3>
        <h3 className="info"> Phone: 1-(718)-440-6382 </h3>
      <p className="info description"> Ben Rothman is the son of Paul Rothman. He is an Executive Producer of Girl on the Ledge. He has taken over as the film's main distributor after his father's death. </p>
       <Popup trigger={testHTML}  modal="true" lockScroll="true">
         <div className='wrapper-div-home'>
           <iframe className="test-iframe-home" src="http://eepurl.com/dy1lXL" frameborder="0" ></iframe>
         </div>
       </Popup>

        </div>
      </div>
    );
  }
}

//<a href="" className="buttoner buttoner-email">Email Me</a>

export default ContactPage;

{/*

   <div id="mc_embed_signup">
    <form action="https://girlontheledge.us18.list-manage.com/subscribe/post?u=41a15ad5beca58d9448ebc3ef&amp;id=b9ac766aa6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
  	    <label for="mce-EMAIL">Subscribe to our mailing list</label>
      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_41a15ad5beca58d9448ebc3ef_b9ac766aa6" tabindex="-1" value="">
        </div>
        <div class="clear">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
        </div>
      </div>
    </form>
  </div>  */}

//   <form action="https://girlontheledge.us18.list-manage.com/subscribe/post?u=41a15ad5beca58d9448ebc3ef&amp;id=b9ac766aa6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <input type="email" className="email" placeholder="youremail@gmail.com" required/>
// </form>
