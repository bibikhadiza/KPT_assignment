import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import "../style/Navbar.css";
import logo from '../Screen Shot 2017-04-29 at 3.46.55 PM.png';

const NavBar = () => (

  <Segment inverted>

    <Menu inverted pointing secondary fluid={true}>
      <img src={logo} alt=''/>
      <Menu.Item name='Find Your Prep'/>
      <Menu.Item name='Inside the Tests'/>
      <Menu.Item name='Free Resources' />
      <Menu.Item name='Why Kaplan' />
      <Menu.Item name='Applying to College' />
      <Menu.Item name='Sign In' id="navbar-right" position="right"/>

      <Icon name="search" size="big"/>
      <Icon name="shop" size="big"/>
    </Menu>

  </Segment>

);

export default NavBar;
