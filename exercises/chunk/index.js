// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk_first_solution(array, size) {
  var newArray = [];
  while (array.length >= size) {
    newArray.push(array.splice(0,size));
  }
  if (array.length !== 0) {
    newArray = newArray.concat([array]);
  } 
  return newArray;
}

function chunk_second_solution(array, size) {
  const chunked = [];
  for (let i of array) {
    const lastElement = chunked.length;

    if (!lastElement) {
      chunked.push([i]);
    } else {
      if (chunked[lastElement-1].length < size) {
        chunked[lastElement-1].push(i);
      } else {
        chunked.push([i]);
      }
    }
  }
  return chunked;
}

function chunk_third_solution(array, size) {
  const chunked = [];

  for (let elm of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([elm]);
    } else {
      last.push(elm);
    }
  }
  return chunked;
}

function chunk(array, size) {
  const chunks = [];
  var index = 0;
  while (index < array.length) {
    chunks.push(array.slice(index, index+size));
    index += size;
  }
  return chunks;
}


module.exports = chunk;
