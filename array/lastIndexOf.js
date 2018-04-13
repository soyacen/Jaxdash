// 这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。

function lastIndexOf(array, value, fromIndex) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
        return -1;
    }
    fromIndex = fromIndex == undefined ? array.length - 1 : fromIndex;
    return array.lastIndexOf(value, fromIndex);
}

console.log(lastIndexOf([1, 2, 1, 2], 2));
// => 3
 
// Search from the `fromIndex`.
console.log(lastIndexOf([1, 2, 1, 2], 2, 2));
// => 1
