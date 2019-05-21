// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	const resultSet = [];
	for (let column=0 ; column<n ; column++) {
		resultSet.push([]);
	}

	let counter = 1,
		startCol = 0,
		endCol = n-1,
		startRow = 0,
		endRow = n-1;

	while (startCol <= endCol && startRow <= endRow) {
		
		// [ > ] left to right, same row
		for (let i=startCol ; i<=endCol ; i++) {
			resultSet[startRow][i] = counter;
			counter++;
		}
		startRow++;

		// [ v ] top to bottom, same column
		for (let i=startRow ; i<=endRow ; i++) {
			resultSet[i][endCol] = counter;
			counter++;
		}
		endCol--;

		// [ < ] right to left, same row
		for (let i=endCol ; i>=startCol ; i--) {
			resultSet[endRow][i] = counter;
			counter++;
		}
		endRow--;

		// [ ^ ] bottom to top, same column
		for (let i=endRow ; i>=startRow ; i--) {
			resultSet[i][startCol] = counter;
			counter++;
		}
		startCol++;

	}

	for (let i=0 ; i<n ; i++) {
		console.log(resultSet[i])
	}
}

module.exports = matrix;
