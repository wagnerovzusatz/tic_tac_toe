import React, { Component, PropTypes } from 'react'
import Field from "../field/comp"
var Board = React.createClass ({
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
        	<div id="board" className={!start ? 'notRunning' : 'running'}>
			<div className={!winner ? '' : 'hide'}>
				<Field index={1} cb={this.onClick}/>
				<Field index={2} cb={this.onClick}/>
				<Field index={3} cb={this.onClick}/>
				<Field index={4} cb={this.onClick}/>
				<Field index={5} cb={this.onClick}/>
				<Field index={6} cb={this.onClick}/>
				<Field index={7} cb={this.onClick}/>
				<Field index={8} cb={this.onClick}/>
				<Field index={9} cb={this.onClick}/>
			</div>
			<div className={winner ? '' : 'hide '} >
				<div id="winnerPannel" className={player.name == "X" ? 'O' : 'X'}>{player.name} won</div>
			</div>
		</div>
        )
}





module.exports = Board