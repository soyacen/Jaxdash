//这个方法类似 _.xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).

function xorBy(...arrays) {
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
  let count = arrays.reduce((res, val) => {
    val.forEach(ele => {
      let item = null;
      res.forEach(val => {
        if (iteratee(val[0]) === iteratee(ele)) {
          item = val;
          item[1]++;
        }
      });
      if (item === null) {
        item = [ele, 1];
        res.push(item);
      }
    });
    return res;
  }, []);

  return count.filter(ele => ele[1] === 1).map(ele => ele[0]);
}

console.log(xorBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// => [1.2, 3.4]

// The `_.property` iteratee shorthand.
console.log(xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
// => [{ 'x': 2 }]
