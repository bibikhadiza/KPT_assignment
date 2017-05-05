import React from 'react';
import '../style/Hsg.css';

const Hsg = () => (
  <div className='hsg-container'>
    <div className='hsg-row'>

      <div className='hsg-firstrow'>
        <img className='hsg-icon' src='//kaptest.cdn.prismic.io/kaptest%2F34d5e253-05b2-4c06-ac8e-0527fcc9c10d_hsg_icon.svg' alt=''/>
      </div>

      <div className='hsg-secondrow'>
        <div className='dont-take'>Don’t take low for an answer</div>
        <div className='high-score'>Higher Score Guaranteed<sup>†</sup></div>
        <div className='money-back'>or your money back</div>
        <p className='hsg-description'>
        Breathe easy knowing that we believe in you. We are so confident in your success that if your score doesn't improve, we'll either give you your money back, or let you retake the class for free. For full eligibility requirements, visit
        <a href='/kaplan-higher-score-guarantee'> kaptest.com/kaplan-higher-score-guarantee</a>
        </p>
      </div>

    </div>
  </div>
);

export default Hsg;
