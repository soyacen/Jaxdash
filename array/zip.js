//创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。

function zip(...arrays) {
  if (arrays.length <= 0) {
    return [];
  }
  return arrays.reduce((res, ele) => {
    return ele.reduce((r, e, i) => {
      if (r[i]) {
        r[i].push(e);
      } else {
        r[i] = [e];
      }
      return r;
    }, res);
  }, []);
}

console.log(zip(["fred", "barney"], [30, 40], [true, false]));
// => [['fred', 30, true], ['barney', 40, false]]
