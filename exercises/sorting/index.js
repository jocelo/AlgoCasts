// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	let tmp = 0;

	for (let i=0 ; i<arr.length ; i++) {
		for (let j=i ; j<arr.length ; j++) {
			if (arr[i] >= arr[j] ) {
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}

	return arr;
}

function selectionSort(arr) {
	for (let i=0 ; i<arr.length ; i++) {
		let indexOfMin = i;

		for (let j=i ; j<arr.length ; j++) {
			if (arr[j] <= arr[indexOfMin]) {
				indexOfMin = j;
			}
		}

		if (indexOfMin !== i) {
			const tmp = arr[i];
			arr[i] = arr[indexOfMin];
			arr[indexOfMin] = tmp;
		}
	}

	return arr;
}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	const center = Math.floor(arr.length / 2);
	const arrLeft = arr.slice(0, center);
	const arrRight = arr.slice(center, arr.length);

	return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

function merge(left, right) {
	const results = [];
	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
