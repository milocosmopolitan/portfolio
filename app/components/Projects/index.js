/*
 * Container Component
 * ====================
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vpnqg5gly
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

class ProjectsComponent extends Component {
	constructor(props) {
		super(props);		
	}

	render() {
    
		return (
			<div>
        <h1>This is project section</h1>
        <p>
          we will need to modifiy this part to show list of projects from database
        </p>
      </div>
		);
	}

}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({}, ownProps) => {  
  return {}
}

const mapDispatch = {}

export default connect(mapState, mapDispatch)(ProjectsComponent);