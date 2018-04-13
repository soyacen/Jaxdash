//创建一个数组切片，从array数组的起始元素开始提取n个元素。

function take(array, n = 1) {
    if(!array || !Array.isArray(array)||Array.length<=0){
        return [];
    }
    return array.slice(0,n);
}

console.log(take([1, 2, 3]));
// => [1]

console.log(take([1, 2, 3], 2));
// => [1, 2]

console.log(take([1, 2, 3], 5));
// => [1, 2, 3]
console.log(take([1, 2, 3], 0));
// => []
