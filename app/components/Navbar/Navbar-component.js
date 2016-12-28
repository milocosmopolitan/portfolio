/*
 * Default Blank Component 
 */

import React from 'react';
import { Link } from 'react-scroll';


export default () => (
  <nav id="navbar" className="center-block">  	
    	<div className="btn btn-default">
    		<Link 
					activeClass="active" 
					className="aboutLink"
					to="about" 
					spy={true} smooth={true} duration={500}>
					About
				</Link>
			</div>
			<div className="btn btn-default">
    		<Link 
					activeClass="active" 
					className="projectsLink"
					to="projects" 
					spy={true} smooth={true} duration={500}>
			  	Projects
				</Link>
			</div>
			<div className="btn btn-default">
    		<Link 
					activeClass="active" 
					className="contactLink"
					to="contact" 
					spy={true} smooth={true} duration={500}>
		    	Contact
		  	</Link>
			</div>
  </nav>
);