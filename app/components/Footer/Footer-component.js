/*
 * Default Blank Component 
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

export default () => (
  <div className="container-fluid">
  	<Grid>
	    <Row>
	      <Col xs={12} md={8}>
	      	This is Footer
	      </Col>
	      <Col xs={6} md={4}>
	      	If you want to have two columns for your footer :)
	      </Col>
	    </Row>
	    <Row align="center">
	    	Developed by Daniel Kang, Jimmy Wang, Milo Kang
	    </Row>
    </Grid>

  </div>
);