//这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（愚人码头：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）

function unzip(array) {
  if (!array || !Array.isArray(array) || array.length <= 0) {
    return [];
  }
  let result = [];
  array.forEach(el => {
    if (Array.isArray(el)) {
      for (let i = 0; i < el.length; i++) {
        if (!result[i]) {
          result[i] = [];
        }
        result[i].push(el[i]);
      }
    }
  });
  return result;
}

var zipped = [["fred", 30, true], ["barney", 40, false]];

console.log(unzip(zipped));
// => [['fred', 'barney'], [30, 40], [true, false]]
