import React from 'react';
import "../style/Cards.css";
import SingleCard from './SingleCard';
import Segment from './Segment';


const Cards = () => (
  <div className='cards-container'>
    <div className='single-card-row'>
      <SingleCard img='https://kaptest.cdn.prismic.io/kaptest%2F9fbd14d7-c26b-4fc0-b5d6-9ec1d0ae8d49_act_classroom_light_2.svg' title='Considering the ACT instead? Let us help you prep for the ACT.' alt=''/>
      <SingleCard
        img='https://kaptest.cdn.prismic.io/kaptest%2F2ac29764-502d-41dd-bc6f-fd0b2aa32a30_psat_classroom_light_2.svg'
        title='Still gearing up for the PSAT? See how Kaplan can help.' alt=''
       />
    </div>

    <h2 className='cards-title'>Why Kaplan?</h2>
    <Segment />

    <div className='kaplan-benefits'>
      <div className='star-columns'>
        <div className='star-content'>
          <img src='https://kaptest.cdn.prismic.io/kaptest%2Ffedf28d8-4112-42e7-b1f4-dfbe615bc1e2_customized_light_1.svg' className='star-image' />
          <h3 className='star-title' alt=''>CUSTOMIZED</h3>
          <p className='star-description'>Study Plans based on your strengths and weaknesses.</p>
        </div>

      <div className='star-content'>
        <img src='https://kaptest.cdn.prismic.io/kaptest%2Ff3e2e7bd-c306-4668-a3aa-71f26b92f34e_experience_light_1.svg' className='star-image' />
        <h3 className='star-title' alt=''>EXPERIENCE</h3>
        <p className='star-description'>We’ve successfully helped millions of students since inventing test prep in 1938.</p>
      </div>

      <div className='star-content'>
        <img src='https://kaptest.cdn.prismic.io/kaptest%2Ffa96ffdf-003c-4934-9297-ad8a61a76000_results_light_1.svg' className='star-image' />
        <h3 className='star-title' alt=''>RESULTS</h3>
        <p className='star-description'>9 out of 10 Kaplan students get into one or more of their top choice colleges.*</p>
      </div>

      <div className='star-content'>
        <img src='https://kaptest.cdn.prismic.io/kaptest%2F863e0f9c-73e2-49d0-957e-115f073f9a59_assurance_light_1.svg' className='star-image'  alt=''/>
        <h3 className='star-title'>ASSURANCE</h3>
        <p className='star-description'>Score higher or your money back guaranteed.†</p>
      </div>

      </div>
    </div>
  </div>
);

export default Cards;
