/*
 * Stateless Functional Component
 * =====================================
 * https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.7qmv5qk1o
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Projects from '../Projects/Projects-component';
import Contact from '../Contact/Contact-component';

export default () => (
  <div>  	
    <Grid id="about" className="fullHeight light-theme" fluid={true}>
      <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <div>
              <h1>This is about section</h1>
              <p>
                hello, I'm a developer and this is my portfolio.
              </p>
            </div>
        </Col>
      </Row>
    </Grid>

    <Grid id="whatever" className="fullHeight dark-theme" fluid={true}>
      <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <div>
              <h1>This is whatever section</h1>
              <p>
                Just to have alternative colored block section
              </p>
            </div>
        </Col>
      </Row>
    </Grid>

    <Grid id="projects" className="fullHeight light-theme" fluid={true}>
      <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <Projects />
        </Col>
      </Row>
    </Grid>    
        
    <Grid id="contact" className="fullHeight dark-theme" fluid={true}>
      <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <Contact />
        </Col>
      </Row>
    </Grid> 
  </div>
);