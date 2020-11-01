import React, { Component } from 'react';
import { connect } from 'react-redux';
import Social from './Social';
class Contact extends Component {

  render() {

    return (
        <div id='ContactDiv'>
            <h1>Contact</h1>
            
            <a id ="contact" href="mailto:mr.jriviere@gmail.com">Send Me an Email</a>
            <br/><br/>
            <Social/>
        </div>
    );
  }
}

export default connect()(Contact);
