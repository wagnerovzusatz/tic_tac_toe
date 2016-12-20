var expect = require('chai').expect
var Winconditions = require("./script.js")

module.exports = function () {
	describe("Winconditions", () => {
		it('should check if somebody win', function () {
			var won = Winconditions.didHeWon([1, 2, 3])
			expect(won)
				.to.be.a('boolean')
		})

	})
}