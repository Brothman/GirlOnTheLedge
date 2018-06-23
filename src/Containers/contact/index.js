import React from 'react';
import {browserHistory} from 'react-router';
import './index.css'
import Header from '../../Components/Header';
import Popup from 'reactjs-popup';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="myContactPage">
        <Header />
      <img className="ben-photo" src={require("./ben.jpg")} height="400px" width="400px" />
        <div className ="contactInfoContainer">
          <h3 className="info"> Email: brothman7000@gmail.com </h3>
        <h3 className="info"> Phone: 1-(718)-440-6382 </h3>
      <p className="info description"> Ben Rothman is the son of Paul Rothman. He is an Executive Producer of Girl on the Ledge. He has taken over as the film's main distributor after his father's death. </p>
       <Popup trigger={<button className="buttoner buttoner-email"> Join Our Mailing List</button>}  modal="true" lockScroll="true">
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
