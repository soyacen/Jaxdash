//此方法类似于_.unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。

function unzipWith(array, iteratee = (...group) => group) {
  if (!array || !Array.isArray(array) || array.length <= 0) {
    return [];
  }
  let len=array[0].length;
  let result = [];
  for(var i=0;i<len;i++){
    let group=[];
    array.forEach(el => {
        group.push(el[i]);
      });
    result.push(iteratee(...group));
  }

  return result;
}

var zipped = [[1, 10, 100], [2, 20, 200]];

console.log(
  unzipWith(zipped, (...group) => group.reduce((res, val) => res + val), 0)
);
// => [3, 30, 300]
