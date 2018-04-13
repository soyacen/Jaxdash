// 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。

function nth(array, n=0){
    if(!array || !Array.isArray(array) || array.length<=0){
        return undefined;
    }
    let index= n>=0?n:array.length+n;
    return array[index];
}
var array = ['a', 'b', 'c', 'd'];
 
console.log(nth(array, 1));
// => 'b'
 
console.log(nth(array, -2));
// => 'c';