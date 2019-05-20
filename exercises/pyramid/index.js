// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, column=0, midPoint=0, level='') {
	midPoint = midPoint || Math.floor((n*2-1) / 2);

	// done and
	if (row === n) {
		return;
	}

	// when done with one column
	if (column === n*2-1) {
		console.log(level);
		row++;
		column = 0;
		level = '';
	}

	if (midPoint+row >= column && midPoint-row <= column) {
		level += '#';
	} else {
		level += ' ';
	}

	pyramid(n, row, column+1, midPoint, level);
}

function pyramid_non_recursive(n) {
	const colSize = (n*2)-1,
		midPoint = Math.floor(colSize/2);
	
	for (var i=0 ; i<n ; i++) {
		let row = '';
		const minPoint = midPoint-i,
			maxPoint = midPoint+i;
		
		for (var j=0 ; j<colSize ; j++) {
			row += j>=minPoint && j<=maxPoint ? '#' : ' ';
		} 
		console.log(row);
	}
}

module.exports = pyramid;
