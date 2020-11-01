import React, { Component } from 'react';
import { connect } from 'react-redux';
class Blog extends Component {
  render() {
    return (
        <div id='BlogDiv'>
            <h1>Blog</h1>
            <hr/>
            <br/>
            <img id="construction" src="https://media4.giphy.com/media/3o85xA30i7z1LUIISY/giphy.gif" />
            <h1>Under Construction...</h1>
            <br/>
        </div>
    );
  }
}

export default connect()(Blog);
