function reduce(arr, fn, initial) {
  return function recurse(prev, index) {
    if (index > arr.length - 1) return prev;
    return recurse(fn(prev, arr[index], index, arr), index + 1);
  }(initial, 0);
}

module.exports = reduce;
