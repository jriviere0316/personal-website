import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutMe from './AboutMe';
import Social from './Social';
class Header extends Component {
  render() {
    return (
        <div id='headerDiv'>
          <h1 id ="headerH1">Hello World, I'm John Riviere!</h1>
          <p>Full-Stack Software Developer | Adaptive Problem-Solver | Resourceful & Inventive Creator  </p>
          <hr/>
          <AboutMe/>
          <div id="imageAndSocialDiv">
            <img id="johnImg" src= '../images/John.jpg' alt="John" height='300px' width='300px'></img>
            <Social/>
          </div>
        </div>
    );
  }
}

export default connect()(Header);
