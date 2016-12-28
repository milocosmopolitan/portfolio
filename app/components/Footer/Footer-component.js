/*
 * Default Blank Component 
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { animateScroll } from 'react-scroll';

const scrollToTop = () => {
    animateScroll.scrollToTop();
}

export default () => (  
		<Grid id="footer" fluid={true}>			
			<a id="scrollToTop" onClick={scrollToTop}>To the top!</a>
      <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
        	This is Footer
        </Col>
      </Row>	
      <Row>
        <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
        	<div className="text-center">Developed by Daniel Kang, Jimmy Wang, Milo Kang</div>        	
        </Col>
      </Row>
    </Grid>
);