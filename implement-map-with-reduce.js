module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(acc, item, i, arr) {
    return acc.concat(fn(item, i, arr));
  }, []);
};
