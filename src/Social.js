import React, { Component } from 'react';
import { connect } from 'react-redux';
class Social extends Component {
  render() {
    return (
        <div id='SocialDiv'>
          <a href="https://github.com/jriviere0316">
              
            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" width='50px' height='50px'/>
          </a>

          <a href="https://www.linkedin.com/in/john-riviere-a5450195/">
            <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png" width='50px' height='50px'/>
          </a>

        </div>
    );
  }
}

export default connect()(Social);
