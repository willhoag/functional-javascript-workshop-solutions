function duckCount() {
  return [].slice.call(arguments).filter(function (obj) {
    return {}.hasOwnProperty.call(obj, 'quack');
  }).length;
}

module.exports = duckCount;
