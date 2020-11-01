import React, { Component } from 'react';
import { connect } from 'react-redux';
class AboutMe extends Component {
  render() {
    return (
        <div id='AboutMeDiv'>
            <h1 class="shortH1">About Me</h1>
            <h6 id="egg">"Allow myself to introduce... myself"</h6>
            <hr/>
            <p class="aboutMe">Musician turned Software Developer with a passion for detail, utility, & aesthetic.</p>
            <p class="aboutMe">I love working with people & technology to produce artful, innovative, & functional content/creations.</p>
            <p id='lastaboutme'class="aboutMe">When I'm not writing code you can find me:</p>
            <ul id='aboutmeul'class="aboutMe"> 
                <li >Creating music for my band  
                    <a id="btta"href="https://www.youtube.com/channel/UCwXnbHw_oFrl8BkuIgnzxEA">
                     By The Thousands
                    </a>
                </li> 
                <li>3D Printing various tools, replicas, & curios</li>
                <li>Playing Magic: The Gathering with my friends</li>
                <li>Snowboarding, Golfing, & watching Sci-Fi with my girlfriend Jessica</li>
                <li>Walking, training, & playing with our two dogs Banjo & Reginald</li>
            </ul>
        
        </div>
    );
  }
}

export default connect()(AboutMe);
