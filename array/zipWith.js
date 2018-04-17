//这个方法类似于_.zip，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group).

function zipWith(...args) {
  if (args.length <= 0) {
    return [];
  }
  var length = 0;
  var iteratee = args[args.length - 1];
  if (typeof iteratee !== "function") {
    iteratee = (...group) => group;
    length = args.length;
  } else {
    if (args.length == 1) {
      return [];
    }
    length = args.length - 1;
  }
  let result = [];
  for (var i = 0; i < args[0].length; i++) {
    let group = [];
    for (var j = 0; j < length; j++) {
      group.push(args[j][i]);
    }
    result.push(iteratee.apply(this, group));
  }
  return result;
}

console.log(
  zipWith([1, 2], [10, 20], [100, 200]/* , function(a, b, c) {
    return a + b + c;
  } */)
);
// => [111, 222]
