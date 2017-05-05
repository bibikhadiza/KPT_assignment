import React from 'react';
import { Button } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import "../style/Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-content">

      <div className="contact-info">
        <h2>Contact Us</h2>
        <Button as="button" fluid={true} icon="call" content="1-800-KAP-TEXT" size="large"/>
        <Button as="button" fluid={true} icon="mail outline" content="Email Us" size="large"/>
      </div>

      <div className="footer-bottom">
        <div className="row">
          <h3>Our Products</h3>
          <br></br>
          <div className="list">
            <List divided inverted relaxed className="inner-list">
              <List.Item>
                <List.Content>
                  An excellent companion
                </List.Content>
              </List.Item>
            </List>
          </div>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
