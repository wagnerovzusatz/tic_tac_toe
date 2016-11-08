import React from "react"
import TestUtils from "react-addons-test-utils"
import {assert,expect} from "chai"
import {mount,shallow} from 'enzyme'
import Field from "./comp"

module.exports = function () {
	describe("Component Field", () => {
		const field = mount(<Field/>)

		it('is 1x <button>', function () {
			var button = field.find("button")
			expect(button)
				.to.have.length(1)
		})

		it('state:index < 10', function () {
			var button = field.find("button")
			var index = field.state()
				.index
			expect(index)
				.to.be.below(10)
		})

	})
}