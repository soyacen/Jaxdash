//这个方法类似 _.union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。

function unionWith(...args) {
  if (args.length <= 0) {
    return [];
  }
  var length = 0;
  var comparator = args[args.length - 1];
  if (typeof comparator !== "function") {
    comparator = (arrVal, othVal) => arrVal === othVal;
    length = args.length;
  } else {
    if (args.length == 1) {
      return [];
    }
    length = args.length - 1;
  }
  var result = args[0];
  for (var i = 1; i < length; i++) {
    let array = args[i];
    if (Array.isArray(array)) {
      array.forEach(arrVal => {
        var has = result.some(val => comparator(arrVal, val));
        if (!has) {
          result.push(arrVal);
        }
      });
    }
  }
  return result;
}

var objects = [
  {
    x: 1,
    y: 2
  },
  {
    x: 2,
    y: 1
  }
];
var others = [
  {
    x: 1,
    y: 1
  },
  {
    x: 1,
    y: 2
  }
];

console.log(
  unionWith(objects, others, (arrVal, othVal) => {
    for (var i in arrVal) {
      if (arrVal[i] != othVal[i]) {
        return false;
      }
    }
    return true;
  })
);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
