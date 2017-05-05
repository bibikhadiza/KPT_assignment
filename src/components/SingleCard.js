import React from 'react';
import "../style/SingleCard.css";
import { Button } from 'semantic-ui-react';

const SingleCard = (props) => (
  <div className="card">

    <div className='card-container'>
      <img src={props.img} className='card-image' alt=''/>
      <h2 className='single-card-header'>{props.title}</h2>

      <div className='single-button'>
        <Button color='blue' size='big' content='Learn More'/>
      </div>
    </div>

  </div>
);

export default SingleCard;
