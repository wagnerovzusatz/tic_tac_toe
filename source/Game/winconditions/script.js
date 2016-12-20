var winConditions = [[1, 2, 3], [1, 4, 7], [2, 5, 8], [3, 6, 9], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [7, 5, 3], [9,5,1]]

function didHeWon(collection) {
	var won = false
	for (var i = 0; i < winConditions.length; i++) {
		var counter = 0
		var wc = winConditions[i]
		for (var j = 0; j < collection.length; j++) {
			if (wc.indexOf(collection[j]) != -1) {
				counter++
				if (counter == 3) won = true
			}
		}
	}
	if (won) return true
	if (!won) return false
}

module.exports = {
	didHeWon: didHeWon
}