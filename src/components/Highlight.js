import React from 'react';
import "../style/Highlight.css";
import Segment from './Segment.js';
import { Dropdown } from 'semantic-ui-react';

const Highlight = () => (
  <div className="highlight-container">
    <div className='highlight-secondary'>

      <div className="highlight col-1">
        <img className="highlight-image" src="https://kaptest.cdn.prismic.io/kaptest%2F1b499cfc-6fd2-4c4c-b4dd-f7c84751f284_plus_upsell.svg" alt=''/>
      </div>

      <div className="highlight col-2">
        <p className="highlight-title">Supercharge your practice with Prep Course PLUS</p>
        <div className="hr-segment">
           <Segment segmentColor='#1e0576'/>
         </div>
        <p className='highlight-description'>Need a little more one-on-one practice, extra help with math or taking the ACT as well? Upgrade to Prep Course PLUS.</p>
        <Dropdown text='Learn More'/>
      </div>

    </div>
  </div>
);

export default Highlight;
