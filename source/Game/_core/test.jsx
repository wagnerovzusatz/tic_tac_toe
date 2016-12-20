import React from "react"
import TestUtils from "react-addons-test-utils"
import {assert,expect} from "chai"
import {mount,shallow} from 'enzyme'

import Game from "./comp"
import Field from "../field/comp"
import Test_Field from "../field/test"
import Test_Player from "../player/test"
import Test_Winconditions from "../winconditions/test"
describe("Game", function () {
	const game = mount(<Game/>)
	describe("Modules", function () {
		it('Component Field', Test_Field)
		it('Class Player', Test_Player)
		it('Winconditions', Test_Winconditions)
	})

	describe("Self", function () {
		it('newGame <button>', function () {
			var button = game.find("button#newgame")
			expect(button.node.innerHTML).to.equal('NEW GAME');
		})

		it('next turn <div>', function () {
			var div = game.find("div#next")
			expect(div)
		})

		it(' winner <div>', function () {
			var div = game.find(".hide")
			expect(div).to.have.length(1);
		})
	})

	

	

	

})