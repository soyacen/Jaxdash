//这个方法类似 _.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。

function unionBy(...arrays) {
  let iteratee = arrays[arrays.length - 1];
  if (typeof iteratee === "function") {
    arrays = arrays.slice(0, arrays.length - 1);
  } else if (typeof iteratee === "string") {
    const key = iteratee;
    iteratee = o => o[key];
    arrays = arrays.slice(0, arrays.length - 1);
  } else {
    iteratee = o => o;
  }
  return arrays.reduce((res, arr) => {
    if (Array.isArray(arr)) {
      return arr.reduce((r, v) => {
        if (r.every(val => iteratee(val) !== iteratee(v))) {
          r.push(v);
        }
        return r;
      }, res);
    }
    return res;
  }, []);
}

console.log(unionBy([2.1], [1.2, 2.3], 4.5, [4.5], Math.floor));
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
console.log(unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
// => [{ 'x': 1 }, { 'x': 2 }]
