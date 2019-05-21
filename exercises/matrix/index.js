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

function getNextCoord(resultMatrix, row, col, size) {
	// 0-Validate if next cell is valid
	// 1-get direciont change?
	// 2-get next cell
	// 3-set value of cell
	// 4-iterate 
	console.log('----------------------');
	console.log(col, col+1, row);
	console.log('size', size)
	console.log(resultMatrix)
	console.log(resultMatrix[row][(col+1)], resultMatrix[row][(col+1)] === '0')
	if (col+1 < size && resultMatrix[row][(col+1)] === '0') {
		return {col:col+1, row:row}
	}
	
	return false;
}

function matrix(n) {
	const rowSet = [],
		resultSet = [];
	
	let row = 0,
		col = -1,
		counter = 1,
		coord = {};

	for (let i=0 ; i<n ; i++) {
		rowSet.push('0');
	}
	for (let i=0 ; i<n ; i++) {
		resultSet.push(rowSet.slice());
	}

	while (counter < (n*n)) {
		coord = getNextCoord(resultSet, row, col, n);
		row = coord.row;
		col = coord.col;

		console.log('the next available coord is:', coord);
		if (!coord) {
			// short curcuit
			counter = n*n;
		} else {
			resultSet[row][col] = counter;
			counter++;
		}
	}
/*
	let direction = 'E';
		col=0,
		row=0,
		keepGoing = true,
		counter = 1;

	while (keepGoing) {
		console.log('['+row+']['+col+'] = ', counter);
		
		resultSet[row][col] = counter;

		switch(direction) {
			case 'N':
				break;
			case 'S':
				if (
						(row+1) <= n
				) {
					row++;
				} else {
					direction = 'W';
				}
				break;
			case 'E':
				if (
						(col+1) <= n
				) {
					col++;
				} else {
					direction='S';
					row++;
				}
				break;
			case 'W':
				break;
			default:
				return false;
		}
		
		counter++;
		if (counter === 20) {
			keepGoing = false;
		}
	}
*/
	for (let i=0 ; i<n ; i++) {
		console.log(resultSet[i]);
	}
}

function matrix_iterative(n) {
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

	return resultSet;
}

matrix(3);

module.exports = matrix;
