// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const results = fn.apply(this, args);
    cache[args] = results;

    return results;
  }
}

function fibSlow(n) {
  if (n < 2) {
    return n;
  }

  return fib(n-1) + fib(n-2);
}

function fib_recursive(n, step=0, lower=0, upper=1) {
  if (n === step+1) {
    return upper;
  }
  return fib_2(n, step+1, upper, lower+upper);
}

function fib_array(n) {
  let series = [0, 1];

  for (let i=2 ; i<=n ; i++) {
    series[i] = series[i-1] + series[i-2];
  }

  return series[n];
}

fib = memoize(fibSlow);

module.exports = fib;
