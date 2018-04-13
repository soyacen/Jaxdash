//创建一个数组切片，从array数组的最后一个元素开始提取n个元素。

function takeRight(array, n = 1) {
  if (!array || !Array.isArray(array) || array.length <= 0) return [];
  if(n>array.length){
      n=array.length;
  }
  return array.slice(array.length - n);
}

console.log(takeRight([1, 2, 3]));
// => [3]

console.log(takeRight([1, 2, 3], 2));
// => [2, 3]

console.log(takeRight([1, 2, 3], 5));
// => [1, 2, 3]

console.log(takeRight([1, 2, 3], 0));
// => []
