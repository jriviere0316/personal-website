import React, { Component } from 'react';
import { connect } from 'react-redux';
class Portfolio extends Component {
  render() {
    return (
        <div id='PortfolioDiv'>
            <h1>Portfolio</h1>
            
        </div>
    );
  }
}

export default connect()(Portfolio);
