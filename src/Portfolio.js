import React, { Component } from 'react';
import { connect } from 'react-redux';
class Portfolio extends Component {
  render() {
    return (
        <div id='PortfolioDiv'>
            <h1>Portfolio</h1>
            
            <div id='PortfolioItem'>
                {/* <a href="https://github.com/jriviere0316/ManaDork"> */}
                <img src='../images/analytics.png' width='150px' height='150px'/>
                {/* </a> */}
                <h3>MinneAnalytics</h3>
                <h6>Prime - Group Project</h6>
            </div>

            <a href="https://github.com/jriviere0316/ManaDork">
                <div id='PortfolioItem'>
                <img src='../images/mtg.png' width='150px' height='150px'/>
                <h3>ManaDork</h3>
                <h6>Prime - Solo Project</h6>
                </div>
            </a>

            <a href="https://github.com/jriviere0316/jquery-server-side-calculator">
                <div id='PortfolioItem'>
                <img src='../images/calcu.png' width='150px' height='150px'/>
                <h3>Server-Side Calculator</h3>
                <h6>Prime - Weekend Project</h6>
                </div>
            </a>

            <a href="https://github.com/jriviere0316/movie-sagas">
                <div id='PortfolioItem'>
                <img src='../images/movies.png' width='150px' height='150px'/>
                <h3>Movie Saga App</h3>
                <h6>Prime - Weekend Project</h6>
                </div>
            </a>

            <a href="https://github.com/jriviere0316/movie-sagas">
                <div id='PortfolioItem'>
                <img id="giphy" src='../images/giphy.png' width='150px' height='150px'/>
                <h3>Giphy API App</h3>
                <h6>Prime - Group Project</h6>
                </div>
            </a>

            <a href="https://github.com/jriviere0316/movie-sagas">
                <div id='PortfolioItem'>
                <img id="giphy" src='../images/floop.png' width='150px' height='150px'/>
                <h3>Feedback Loop</h3>
                <h6>Prime - Weekend Project</h6>
                </div>
            </a>

        </div>
    );
  }
}

export default connect()(Portfolio);
