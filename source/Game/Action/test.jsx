import React from "react"
import TestUtils from "react-addons-test-utils"
import {assert,expect} from "chai"
import {mount,shallow} from 'enzyme'

import Game from "Game/_core/comp"
import Action from "./comp"

describe("<Action />", function () {
	var game = mount(<Game />)
	var action = game.find("Action")

	it('Component of Game', function () {
		expect(action).to.have.length(1)
	})

	it('Should have a restart button', function () {
		var rButton = action.find('button#startButton')
		expect(rButton).to.have.length(1)
	})
})
