/*
 * Default Blank Component 
 */

import React from 'react';
import { Link } from 'react-scroll';
var classNames = require('classnames');

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuStatus: false,
			menuButtonStatus: false
		}
	}

	onClickMenuButton(e) {		
		if(this.state.menuStatus){
			this.setState({
				menuStatus: false,
				menuButtonStatus: false
			})
		} else {
			this.setState({
				menuStatus: true,
				menuButtonStatus: true
			})
		}
		
	}

	render(){
		return (
			<div id="sidebar">
		  	<div id="btn-menu" 
		  		className={classNames({open: this.state.menuButtonStatus})} 
		  		onClick={this.onClickMenuButton.bind(this)}>
					<span className="top"></span>
					<span className="middle"></span>
					<span className="bottom"></span>
				</div>

		  	<div className={classNames('menu', {open: this.state.menuStatus})}>
		  		<div className="menuButtons">
			  		<div className="menuButton">
			    		<Link 
								activeClass="active" 
								className="homeLink"
								to="home" 
								offset={0}
								spy={true} smooth={true} duration={500}>
								Home
							</Link>
						</div>
			  		<div className="menuButton">
			    		<Link 
								activeClass="active" 
								className="aboutLink"
								to="skills" 
								offset={140}
								spy={true} smooth={true} duration={500}>
								About
							</Link>
						</div>
						<div className="menuButton">
				  		<Link 
								activeClass="active" 
								className="projectsLink"
								to="project" 
								offset={140}
								spy={true} smooth={true} duration={500}>
				  			Projects
							</Link>
			  		</div>
			  	</div>
			  	<div className="contactSocial">
			  		<p>Contact Me</p>
	            <a href="https://linkedin.com/in/danielkang415"><i className="fa fa-linkedin fa-2x"></i></a>
	            <a href="https://github.com/dkinsk"><i className="fa fa-github-alt fa-2x"></i></a>
	            <a href="https://twitter.com/dkang415"><i className="fa fa-twitter fa-2x"></i></a>
				  	<div>
		          <a href="mailto:dankwebdev@gmail.com" target="_top"><i className="fa fa-envelope fa-2x"></i></a>
		        </div>
			  	</div>
			  </div>
		  </div>
		)
	}
}
 