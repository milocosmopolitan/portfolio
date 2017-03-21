/*
 * Container Component
 * ====================
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.vpnqg5gly
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Navbar, Sidebar, Footer, Contact, Projects } from '../../components';
// import { 
// 		Link, 
// 		Events, 
// 		animateScroll, 
// 		scrollSpy } from 'react-scroll';
// import { Grid } from 'react-bootstrap';


/* -----------------    COMPONENT     ------------------ */

class RootComponent extends Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(event) {
    
    const chaps = document.getElementsByClassName('chapters');
    const chapters = document.getElementsByClassName('chapter');

   	let yPos = [];
   	yPos.push(chaps[0].offsetTop); 

    Array.prototype.forEach.call(chapters, function(chapter, index) {
    	if(index===0) yPos[0] = yPos[0] * 0.9; 
    	yPos.push(chapter.offsetHeight + yPos[index])
    });

    for(let i = 0; i < yPos.length-1; i++) {
      window.scrollY >= yPos[i] ? chapters[i].className = 'chapter current' : chapters[i].className = 'chapter';
    }
  }


	render() {
		return (
				<div>
	        {
	          this.props.children && React.cloneElement(this.props.children, this.props)
	        }
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