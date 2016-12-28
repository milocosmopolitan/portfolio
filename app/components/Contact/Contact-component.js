/*
 * Container Component
 * ====================
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vpnqg5gly
 */

import React, { Component } from 'react';
import { connect } from'react-redux';
import { 
	FormGroup, ControlLabel, FormControl,
	Grid, Row, Col 
} from 'react-bootstrap';
import { validateEmail } from './Contact-reducer'

/* -----------------    COMPONENT     ------------------ */



class ContactComponent extends Component {
	constructor(props) {
		super(props);
	}	

	render() {
    
		return (
			<div>
        <h1>This is contact section</h1>
        <form id="contact-form">
        	<Grid fluid={true}>
      			<Row>
        			<Col xs={12} md={6}>
        				<FormGroup controlId="name">
						      <ControlLabel>Contact Name</ControlLabel>
						      <FormControl 
						      	type="text"
						      	value=""
						      	placeholder="Enter your name"
						      	required
						       />      
						    </FormGroup>

        				<FormGroup controlId="email">
				          <ControlLabel>Email</ControlLabel>
				          <FormControl
				            type="text"
				            value=""
				            placeholder="Enter your email"
				            required
				          />				         
				        </FormGroup>
				        <FormGroup controlId="phone">
				          <ControlLabel>Phone Number</ControlLabel>
				          <FormControl
				            type="text"
				            value=""
				            placeholder="Enter your phone number"
				          />
				        </FormGroup>				        
        			</Col>
        			<Col xs={12} md={6}>
        				<FormGroup controlId="text">
				          <ControlLabel>Text</ControlLabel>				          				          
						      <FormControl 
						      	componentClass="textarea" 
						      	value=""
						      	placeholder="Tell me what you want" />							    
				        </FormGroup>
        			</Col>
      			</Row>
    			</Grid>        	
        </form>
      </div>
		);
	}

}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ contact }) => ({ contact })

const mapDispatch = { }

export default connect(mapState, mapDispatch)(ContactComponent);