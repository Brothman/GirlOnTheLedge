import React from 'react';
import {browserHistory} from 'react-router';
import './index.css'
import Header from '../../Components/Header';

class synopsis extends React.Component {
  render() {
    return (
      <div className="mySynopsis">
        <Header />
      <h1 className="synop-head snyop">GOTL Synopsis</h1>

          <p className="quote snyop">“That which I fear most has come upon me.”</p>
          <p className="quote snyop">-The Book of Job (3:25)</p>
        <p className="body snyop">The film is an avant-garde, at times hallucinatory, journey into the life of fictional photographer Ana Baum.</p>
      <p className="body snyop">We start at the pinnacle of Ana’s material success. Together with her husband Harry, the two are up and coming fashion photographers in the glamorous world of celebrities, slick magazines and high-powered designers. Everyone wants them. But they don’t want everyone: Ana and Harry have realized this surface world is superficial and empty. They set about to change their lives.</p>
          <p className="body snyop">Harry encourages Ana to look beyond the surface and become a “serious” photographer. Ana begins to photograph people on the edge: disease ridden prostitutes, bag ladies, transvestites, dying alcoholics, the mentally retarded, all of whom inhabit a world guided by mysterious rules and rituals that she seems to understand.</p>
          <p className="body snyop">Ana’s obsessive artistic quest is to strip away the mask her subjects wear and capture the hidden reality beneath at any cost. No matter how people try to hide themselves, Ana believes that the camera will ultimately reveal the truth as to who they are.</p>
          <p className="body snyop">Ana and Harry drift apart and separate. Ana, who is now a fiercely independent artist, struggles to make a living.</p>
          <p className="body snyop">When Ana’s father falls fatally ill, she photographs his death throes. In the aftermath of his death, Ana feels totally abandoned and falls into a deep depression that never lets up. Ana’s extreme lifestyle has caught up with her and takes its physical and psychological toll: Ana has become excessively needy and difficult to be around; her body is breaking down; she contracts hepatitis.</p>
          <p className="body snyop">At a surreal Halloween ball, Ana’s attention is drawn to a man costumed as the Angel of Death. When he briefly removes his mask to allow her a glimpse, Ana recognizes the image of the strange man she has attempted to photograph several times in the past without success. </p>
          <p className="body snyop">Terrified and unsure of her grip on reality, Ana flees to the streets of the East Village, literally descending into a personal hell. </p>

      </div>
    );
  }
}

export default synopsis;
