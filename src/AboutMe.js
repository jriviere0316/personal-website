import React, { Component } from 'react';
import { connect } from 'react-redux';
class AboutMe extends Component {
  render() {
    return (
        <div id='AboutMeDiv'>
            <h1>About Me</h1>
            <p> This is going to be my about me paragraph.  This is going to be my about me paragraph.  This is going to be my about me paragraph.  This is going to be my about me paragraph.  This is going to be my about me paragraph.  This is going to be my about me paragraph.  This is going to be my about me paragraph.  </p>
        </div>
    );
  }
}

export default connect()(AboutMe);
