import React from "react"
import TestUtils from "react-addons-test-utils"
import {assert,expect} from "chai"
import {mount,shallow} from 'enzyme'

import Game from "./comp"



describe("Process", function () {

	it('Start Game settings', function () {
		var game = mount(<Game/>)
		assert.isFalse(game.node.state.start, "start should be false")
		assert.isFalse(game.node.state.winner, "winner should be false")
		game.find("button#startButton").simulate("click")
		assert.isTrue(game.node.state.start)
	})

	it("Show next on Action Div", function(){
		var game = mount(<Game/>)
		var action = game.find("div#next")
		expect(action.node.className).to.be.a('string') 
	})

	it('Click on Field', function () {
		var game = mount(<Game/>)
		var field = game.find("Field").first()
		field.simulate("click")
	})

	it("Set owner for the Field (x,o) after click", function(){
		var game = mount(<Game/>)
		game.find("button#startButton").simulate("click")
		var field = game.find("Field").first()
		assert.isNull(field.node.state.owner)
		field.simulate("click")
		assert.isNotNull(field.node.state.owner)
	})

	it("Player should earn the index", function(){
		var game = mount(<Game/>)
		game.find("button#startButton").simulate("click")
		var field = game.find("Field").first()
		var player = game.node.state.onMove
		field.simulate("click")
		assert.include(player.collection, 1)
	})

	it("Field should be disabled after click", function(){
		var game = mount(<Game/>)
		game.find("button#startButton").simulate("click")
		var field = game.find("Field").first()
		field.simulate("click")
		assert.isTrue(field.node.state.disabled)
	})

	it("Check if somebody won", function(){
		var game = mount(<Game/>)
		game.find("button#startButton").simulate("click")
		assert.isTrue(game.node.won([1,2,3]))
		assert.isFalse(game.node.won([1,2,4]))
	})

	it("If somebody won => end game", function(){
		var game = mount(<Game/>)
		game.find("button#startButton").simulate("click")
		game.node.end(true)
		assert.isTrue(game.node.state.winner)
	})

	it("last field => end game", function(){
		var game = mount(<Game/>)
		game.find("button#startButton").simulate("click")
		var cFields = game.node.lastField(4,5)
		assert.isTrue(cFields)
		assert.isFalse(game.node.state.winner)
	})

	it("nobody won => next round", function(){
		var game = mount(<Game/>)
		game.find("button#startButton").simulate("click")
		var firstTurn = game.node.state.onMove
		var field = game.find("Field").first()
		field.simulate("click")
		var nextTurn = game.node.state.onMove
		assert.notEqual(firstTurn.name, nextTurn.name, 'these numbers are not equal')

	})
})