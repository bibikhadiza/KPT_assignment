import React from 'react';
import "../style/Steps.css";
import { Step } from 'semantic-ui-react';

const Steps = () => (

  <div className="steps">

    <Step.Group >
      <Step active href='#' title='Unlimited Prep' description='UNLIMITED ONLINE & IN PERSON' className="step-left"/>
      <a className='step' href='#'>
        <div className="step-price">$1300</div>
        <div className='step-title'>
          “Work one-on-one with a top tutor, at home or online – and get a prep course included at no additional cost”
        </div>
        <button>Learn More</button>
      </a>
    </Step.Group>

    <Step.Group>
      <Step active href='#' title='SAT Self-Paced Course' description='AVAILABLE ONLINE ONLY' className="second-step"/>
      <a className='step' href='#'>
        <div className="step-price">$1300</div>
        <div className='step-title'>
          “Work one-on-one with a top tutor, at home or online – and get a prep course included at no additional cost”
        </div>
        <button>Learn More</button>
      </a>
    </Step.Group>

    <Step.Group>
      <Step active href='#' title='SAT Tutoring' description='AVAILABLE ONLINE & IN PERSON' className="step-left" />
      <a className='step' href='#'>
        <div className="step-price">$1300</div>
        <div className='step-title'>
          “Work one-on-one with a top tutor, at home or online – and get a prep course included at no additional cost”
        </div>
        <button>Learn More</button>
      </a>
    </Step.Group>

  </div>
);

export default Steps;
