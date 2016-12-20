import React from "react"
import Head from "../head/comp"
import Board from "../board/_core/comp"
import Action from "../action/comp"

var Game = React.createClass ({
	childContextTypes : {
		onMove: React.PropTypes.object.isRequired,
		winner: React.PropTypes.bool.isRequired,
		start: React.PropTypes.bool.isRequired
	},
	getInitialState:init,
	start:start,
	onClick:onClick,
	lastField:lastField,
	next:next,
	won:won,
	end:end,
	getChildContext: getChildContext,
	render:render,
})

function init() {
	return {
		start:false,
		players: undefined,
		onMove: {},
		winner: false
	}
}



function start(){
	var players = new Array({ name:"O", collection:[]},{ name:"X" ,collection:[]})
	var rN = (Math.floor(Math.random() * players.length) + 1) - 1
	this.setState({
		players: players,
		onMove: players[rN],
		start:true,
		winner:false,
		key: Math.random()
	})
}

function onClick(index) {
	var player = this.state.onMove
	player.collection.push(index)
	var won = this.won(player.collection)
	if (won) this.end(true)
	var lastField = this.lastField(this.state.players[0].collection.length, this.state.players[1].collection.length)
	if(lastField) this.end(false)
	if (!won && !lastField) this.next()
}

function lastField(arr1,arr2){
	if(arr1+ arr2 == 9)return true
	if(arr1+ arr2 != 9)return false
}

function won(collection) {
	var winConditions = [[1, 2, 3], [1, 4, 7], [2, 5, 8], [3, 6, 9], [4, 5, 6], [7, 8, 9], [1, 5, 9], [7, 5, 3], [9,5,1]]
	var won = false
	for (var i = 0; i < winConditions.length; i++) {
		var counter = 0
		var wc = winConditions[i]
		for (var j = 0; j < collection.length; j++) {
			if (wc.indexOf(collection[j]) != -1) {
				counter++
				if (counter == 3) won = true
			}
		}
	}
	if (won) return true
	if (!won) return false
}

function next(){
	if (this.state.onMove.name == "X")this.setState({onMove:this.state.players[0]})
	if (this.state.onMove.name == "O")this.setState({onMove:this.state.players[1]})
}

function end(winner){
	this.setState({winner:winner,start:false})
}

function getChildContext(){
	return {
		onMove: this.state.onMove,
		winner: this.state.winner,
		start:this.state.start
	}
}



function render() {
	var start = this.state.start
	var winner = this.state.winner
	var player = this.state.onMove
	return (
		<div id="game" key={this.state.key}>
			<Head cb={this.start} />
			<Board cb={this.onClick}/>
			<Action cb={this.start}/>
		</div>
	)
}

module.exports = Game