/*
 * Default Blank Component 
 */

import React from 'react';
import { Link } from 'react-scroll';

export default () => (
  <div id="navbar">
  	
    	<div className="btn btn-default"><Link 
			activeClass="active" 
			className="aboutLink"
			to="about" 
			spy={true} smooth={true} duration={500}>About</Link></div>
  	
  	<Link 
			activeClass="active" 
			className="projectsLink"
			to="projects" 
			spy={true} smooth={true} duration={500}>
    	Projects
  	</Link>
  	<Link 
			activeClass="active" 
			className="contactLink"
			to="contact" 
			spy={true} smooth={true} duration={500}>
    	Contact
  	</Link>
  </div>
);