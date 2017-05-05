import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react';
import "../style/Video.css";
import logo from '../images/145d3b465b4f6dea723aba77d62b7981b1ce52ab_billboard-product-feature-sat-channel-large.jpg';


class Video extends Component {

  render() {
    return (
      <Embed id='125292332' placeholder={logo} source='vimeo'/>
    );
  }

};

export default Video;
