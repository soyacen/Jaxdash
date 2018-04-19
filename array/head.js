//获取数组 array 的第一个元素。

function head(array){
    if(!array || !Array.isArray(array)||array.length<=0){
        return undefined;
    }
    return array[0];
}


console.log(head([1, 2, 3]));
// => 1
 
console.log(head([]));
// => undefined