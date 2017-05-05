import React, { Component } from 'react';

import "../style/Segment.css"

class Segment extends Component {

  render() {
    return (
      <hr style={{backgroundColor:this.props.segmentColor}}>
      </hr>
    )
  }

};

export default Segment;
