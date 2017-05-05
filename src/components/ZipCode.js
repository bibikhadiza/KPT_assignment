import React from 'react';
import "../style/ZipCode.css";
import { Icon, Button } from 'semantic-ui-react';

const ZipCode = () => (
  <div className="zipcode">

    <div className="zip-content">
      <h3>Find prep near you</h3>
      <Icon name="marker" color="yellow"/>
        <input type="text" label='sjfhsjfhsj' name="name" />
        <Button as="button" fluid={true}  content="See Courses" color="yellow" size="large"/>
    </div>

  </div>
);

export default ZipCode;
