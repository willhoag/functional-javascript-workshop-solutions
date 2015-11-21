function Spy(target, method) {
  var fn = target[method];
  var spy = {count: 0};
  target[method] = function () {
    spy.count += 1;
    return fn.apply(this, arguments);
  };
  return spy;
}

module.exports = Spy;
