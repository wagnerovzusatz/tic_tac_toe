var expect = require('chai').expect
var Player = require("./script")

module.exports = function () {

	describe("Class Player", function () {
		it('should create a Player', function () {
			var player = new Player("O")
			expect(player)
				.to.be.a('object')
		})
	})
}