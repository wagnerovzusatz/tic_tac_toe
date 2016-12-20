import React, { Component, PropTypes } from 'react'

var Head = React.createClass ({
	contextTypes :{
		onMove: React.PropTypes.object.isRequired,
		winner: React.PropTypes.bool.isRequired,
		start: React.PropTypes.bool.isRequired
	},
	onClick:onClick,
	render:render
})


function onClick(index) {
	this.props.cb(index)
}

function render() {
	var start = this.context.start
	var winner = this.context.winner
	var player = this.context.onMove
	return (
        	<div id="head">
			<div></div>
			<div id="title">TIC TAC</div>
			<div id="abort" className="restartButton"><button  className={!start ? 'hide' : ''} onClick={this.onClick}>Abort</button></div>
		</div>
        )
}

module.exports = Head