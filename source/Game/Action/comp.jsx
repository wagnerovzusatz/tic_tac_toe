import React, { Component, PropTypes } from 'react'

var Action = React.createClass ({
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
        	<div id="action">
			<div className={!start ? '' : 'hide'}>
				<button id="startButton" className="button" onClick={this.onClick}>New Game</button>
			</div>	
			<div className={start ? '' : 'hide'}>
				<div id="next" className={player.name == "X" ? 'O' : 'X'}>{player.name} turn</div>
			</div>
		</div>
        )
}

module.exports = Action