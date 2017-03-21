/*
 * Stateless Functional Component
 * =====================================
 * https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.7qmv5qk1o
 */

import React from 'react';
import { Contact, Sidebar, ForceLayout } from '../../components';

import { Grid, Row, Col } from 'react-bootstrap';

export default () => (
  <div className="wrapper">
    <Sidebar />
    <div className="splitlayout">
      <header className="intro">
        <div className="side side-right" id="me" />
          <div className="side side-left" id="home">
            <div className="copy">
              <h1>Building<br></br>
                  Beautiful,<br></br>
                  Functional<br></br> 
                  Things</h1>
                <p>
                  Welcome to my site. I'm a former educator turned full stack developer. I attended Fullstack Academy of Code where I studied the NERP stack. When I'm not thinking about code, reading about code, or coding, I can be found enjoying art, animation, comic books, and craft beer.
                </p>
            </div>
          </div>
        </header>
        <div className="chapters">
          <div className="chapter" id="skills">
            <div className="side side-right" id="skillsRight">
              <div className= "comics-thought">
                <div className="icons">
                  <div className="logo" id="js" />
                  <div className="logo" id="node" />
                  <div className="logo" id="express" />
                  <div className="logo" id="postgresql" />
                  <div className="logo" id="jquery" />
                  <div className="logo" id="mocha" />
                  <div className="logo" id="chai" />
                  <div className="logo" id="webpack" />
                  <div className="logo" id="react" />
                  <div className="logo" id="redux" />
                  <div className="logo" id="sass" />
                  <div className="logo" id="aframe" />
                </div>
              </div>
            </div>
            <div className="side side-left">
              <div className="chapName">
                <h1 id="sect1">SKILLS</h1>
              </div>
              <div className="copy">
                <div className="content">
                <h1>My<br></br>
                    Road<br></br>
                    To<br></br>
                    Code<br></br>
                </h1>
                  <p>I studied creative writing at The New School University and worked in the comic book industry before moving to South Korea to become an ESL teacher. After returning to the US, I started my road to code on Codeacademy's learning platform and successfully completed Fullstack Academy of Code's immersive program. I'm now a web developer experienced in Node, Express, React/Redux, PostgreSQL, and Javascript. </p>
                </div> 
              </div>
            </div>
          </div>
          <div className="chapter chapter-project" id="project">
            <div className="side side-right" id="hop" />
            <div className="side side-left">
              <div className="chapName">
                <h1 id="sect">PROJECTS</h1>
              </div>
              <div className="copy">                
                <div className="content">
                  <h1>Craft Brewery<br></br>
                      Locator<br></br>
                  </h1>
                  <h2>Hopfinder</h2>
                  <hr></hr>
                  <p>
                    The goal of this project is to help people find craft breweries by location. Currently users can login and search for breweries by location. Features under development are a news feed, a favorites page, and an events page. Made with React.JS, Express.JS, Node.JS, Sequelize, Google Maps API, BreweryDB API, and Freegeoip.net for geolocation, and JWT/OAuth for authentication. 
                  </p>
                  <div className="link-button">
                  <a href="http://quiet-peak-58519.herokuapp.com">Site</a></div>
                  <div className="link-button" id="inner">
                  <a href="https://github.com/hopfinder">Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chapter chapter-project">
            <div className="side side-right" id="star" />
            <div className="side side-left">
              <div className="chapName">
                <h1 id="sect">PROJECTS</h1>
              </div>
              <div className="copy">
                <div className="content">
                  <h1>WebVR<br></br>
                      Experiment
                  </h1>
                <h2>Starship Academy</h2>
                <hr></hr>
                  <p>
                    A project experimenting with WebVR using A-Frame. Starship Academy is a multiplayer, space shooter. The objective of the game is to destroy asteroids. Made with A-Frame, Redux on the backend, and Socket.Io. Playable on desktop or with Google Cardboard on mobile.
                  </p>
                  <div className="link-button">
                  <a href="http://starshipacademy.herokuapp.com/">Site</a></div>
                  <div className="link-button" id="inner">
                  <a href="https://github.com/StarshipAcademy/StarshipAcademy">Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="email">
        <a href="mailto:dankwebdev@gmail.com" target="_top"><p>dankwebdev@gmail.com</p></a>
      </div>
    </div>
);