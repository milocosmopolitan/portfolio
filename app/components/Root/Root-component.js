/*
 * Container Component
 * ====================
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vpnqg5gly
 */

import React, { Component } from 'react';
import { connect } from'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar-component'
import Footer from '../Footer/Footer-component'
import { 
		Link, 
		Events, 
		animateScroll, 
		scrollSpy } from 'react-scroll';

/* -----------------    COMPONENT     ------------------ */

class RootComponent extends Component {
	constructor(props) {
		super(props);		
	}
	componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

	render() {
    
		return (
				<div>
					<Navbar />
	        {
	          this.props.children && React.cloneElement(this.props.children, this.props)
	        }
	        <a onClick={this.scrollToTop}>To the top!</a>   
	        <Footer />
      </div>
		);
	}

}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({}, ownProps) => {  
  return {}
}

const mapDispatch = {}

export default connect(mapState, mapDispatch)(RootComponent);