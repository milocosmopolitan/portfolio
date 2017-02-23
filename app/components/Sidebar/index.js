/*
 * Default Blank Component 
 */

import React from 'react';
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
		  		<div className="contact-info">
		  			<div>Contact</div>
		  			<div>
		  				<div>Milo Kang</div>
		  				<div>Fullstack Developer</div>
		  				<div>New York, USA</div>
		  			</div>
		  		</div>
		  		<div>
			  		<ul>	
			  			<li>About</li>
			  			<li>Projects</li>
			  			<li>Blog</li>
			  			<li>Contact</li>  			
			  		</ul>
		  		</div>
		  		<div>
		  			Copyright 2017 © Milo Kang
		  		</div>
		  	</div>

		  </div>		
		)
	}
}
 