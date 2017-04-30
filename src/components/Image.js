import React from 'react'
import { Image } from 'semantic-ui-react'
import "../style/Image.css"
import image from '../15375d0f0cd93f9832916892016291f4b78bf1c1_billboard-prep-options-c (2).jpg'


const HeroImage = () => (
  <div className="heroImage">
    <Image src={image} fluid={true} />
  </div>
)


export default HeroImage;
