//创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）

function union(...arrays) {
  return arrays.reduce((res, arr) => {
    if (Array.isArray(arr)) {
      return arr.reduce((r, v) => {
        if (r.indexOf(v) < 0) {
          r.push(v);
        }
        return r;
      }, res);
    }
    return res;
  }, []);
}
console.log(union([2], [1, 2],5,[7,3,2,1]));
// => [2, 1]
