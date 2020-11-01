import React, { Component } from 'react';
import { connect } from 'react-redux';
import Social from './Social';
class Contact extends Component {

  render() {

    return (
        <div id='ContactDiv'>
            <h1>Contact</h1>
            <hr/>
            <p>I love working with creative & collaborative people!</p> 
            <p>Let's connect through Github, Linkedin, or Email!</p>
            <Social/>
            {/* <br/> */}
            {/* <a id ="contact" href="mailto:mr.jriviere@gmail.com">Send Me an Email</a> */}
           
        </div>
    );
  }
}

export default connect()(Contact);
