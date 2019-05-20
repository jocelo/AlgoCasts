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

function pyramid(n) {
	for (var i=0 ; i<n ; i++) {
		let row = '';
		const colSize = (n*2)-1,
			midPoint = Math.floor(colSize/2),
			minPoint = midPoint-i,
			maxPoint = midPoint+i;
		
		for (var j=0 ; j<colSize ; j++) {
			row += j>=minPoint && j<=maxPoint ? '#' : ' ';
		} 
		console.log(row);
	}
}

module.exports = pyramid;
