import React, {Component} from 'react';
import "../style/Image.css";
import Segment from './Segment';

class HeroImage extends Component {

  render() {
    return (
      <div className="heroImage" style={{backgroundImage: 'url('+ this.props.backgroundImage + ')'}}>

        <div className="heroImage-content">
        {this.props.title}
          <Segment segmentColor='#ffc72e;'/>
          <h4>{this.props.description}</h4>
        </div>

      </div>
    );
  }
};

export default HeroImage;
