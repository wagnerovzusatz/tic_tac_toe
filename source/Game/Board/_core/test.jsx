import React from "react"
import TestUtils from "react-addons-test-utils"
import {assert,expect} from "chai"
import {mount,shallow} from 'enzyme'



import Game from "Game/_core/comp"
import Board from "./comp"



describe("<Board />", function () {
	var game = mount(<Game />)
	var board = game.find("Board")

	it('Component of Game', function () {
		expect(board).to.have.length(1)
	})

	it('Should have 9 x <Field />', function () {
		expect(board.find("Field")).to.have.length(9)
	})

	it('Should have a winner pannel', function () {
		var wP = board.find('div#winnerPannel')
		expect(board.find('div#winnerPannel')).to.have.length(1)
	})
})