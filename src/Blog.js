import React, { Component } from 'react';
import { connect } from 'react-redux';
class Blog extends Component {
  render() {
    return (
        <div id='BlogDiv'>
            <h1>Blog</h1>
            
        </div>
    );
  }
}

export default connect()(Blog);
