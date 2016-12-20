import React from "react"
import TestUtils from "react-addons-test-utils"
import {assert,expect} from "chai"
import {mount,shallow} from 'enzyme'

import Game from "Game/_core/comp"
import Head from "./comp"

describe("<Head />", function () {
	var game = mount(<Game />)
	var head = game.find("Head")

	it('Component of Game', function () {
		expect(head).to.have.length(1)
	})
	
	it('Should have a title', function () {
		var title = head.find("div#title")
		expect(title).to.have.length(1)
	})
	it('Should have a restart button', function () {
		var rButton = head.find('div#abort').find("button")
		expect(rButton).to.have.length(1)
	})
})
