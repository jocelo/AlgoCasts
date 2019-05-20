// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, stair='') {
	// recursive solution
	if (n === row) {
		return;
	}

	if (stair.length === n) {
		console.log(stair);
		stair = '';
		row++;
	}

	stair += stair.length <= row ? '#' : ' ';
	steps(n, row, stair);
}

function steps_non_recursive(n) {
	for (var row=0 ; row<n ; row++) {
		var line = '';
		for (var col=0 ; col<n ; col++) {
			line += col <= row ? '#' : ' ';
		}
		console.log(line);
	}
}

module.exports = steps;
