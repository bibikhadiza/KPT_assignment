import React from 'react';
import "../style/Channel.css";
import Segment from './Segment';
import { Button } from 'semantic-ui-react';

const Channel = () => (

  <div className='channel-container'>
    <div className='channel-content'>
      <h3 className='channel-title'>Kaplan's SAT® Channel</h3>
      <h4 className='channel-subtitle'>All-star teachers. Personalized prep. One-on-one help.</h4>
      <Segment />
      <h4>Kaplan’s exclusive SAT Channel provides interactive live online sessions taught by our most loved teachers. Students tune in for the sessions they need most and get instant help with any questions they have.</h4>
      <Button color='yellow' size='big' content='Learn More'/>
    </div>
  </div>

);

export default Channel;
