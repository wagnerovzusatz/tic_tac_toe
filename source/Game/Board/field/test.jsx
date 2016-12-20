import React from "react"
import TestUtils from "react-addons-test-utils"
import {assert,expect} from "chai"
import {mount,shallow} from 'enzyme'


import Field from "./comp"
import Game from "Game/_core/comp"

describe("<Field />", function () {
	var game = mount(<Game />)
	var field = game.find("Board").find("Field")
	var button = field.find("button").first()

	it('Component of Board', function () {
		expect(game.find("Board").find("Field"))
	})

	it('is a button', function () {
		expect(button).to.have.length(1)
	})

	it('prop:index', function () {
		assert.isNumber(field.node.props.index)
	})
	it('prop:owner', function () {
		assert.isUndefined(field.node.props.owner)
	})
})
