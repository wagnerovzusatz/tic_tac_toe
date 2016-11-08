import React from "react"
import Field from "../field/comp"
import Player from "../player/script.js"
import winconditions from "../winconditions/script.js"

class Game extends React.Component {
	constructor() {
		super()
		const rN = (Math.floor(Math.random() * 2) + 1) - 1
		const Players = new Array(new Player("O"), new Player("X"))
		const next = Players[rN]
		this.state = {
			next: next,
			Players: Players,
			winner: false
		}
	}


	getChildContext() {
		return {
			next: this.state.next
		}
	}


	afterSelected(index) {
		var player = this.state.next
		player.collection.push(index)
		var won = winconditions.didHeWon(player.collection)
		if (won) this._endGame()
		if (!won) this._nextRound()
	}
	_endGame() {
		this.setState({
			hidden: false,
			winner: this.state.next.name
		})
	}

	_nextRound() {
		if (this.state.next.name == "X") this.state.next = this.state.Players[0]
		else this.state.next = this.state.Players[1]

		this.setState({
			next: this.state.next
		})
	}

	newGame(e) {
		this.state.Players[0].collection = []
		this.state.Players[1].collection =  []
		this.setState({
			next:this.state.Players[0],
			winner:false,
			key: Math.random()
		})
	}

	render() {
		return (
			<div id="game" key={this.state.key}>
			<button id="newgame" onClick={() =>this.newGame()}>NEW GAME</button>
				<div>
					<Field cb={this.afterSelected.bind(this)}/>
					<Field cb={this.afterSelected.bind(this)}/>
					<Field cb={this.afterSelected.bind(this)}/>
					<Field cb={this.afterSelected.bind(this)}/>
					<Field cb={this.afterSelected.bind(this)}/>
					<Field cb={this.afterSelected.bind(this)}/>
					<Field cb={this.afterSelected.bind(this)}/>
					<Field cb={this.afterSelected.bind(this)}/>
					<Field cb={this.afterSelected.bind(this)}/>
				</div>

				<div id="next">Its {this.state.next.name} turn</div>
				<div className={!this.state.winner ? 'hide' : ''}><p>{this.state.winner} won!</p></div>
				
			</div>
		)
	}
}


Game.childContextTypes = {
	next: React.PropTypes.object.isRequired
}
module.exports = Game