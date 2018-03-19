//创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

function drop(array,n=1){
    if(!array || !Array.isArray(array)|| array.length<=0){
        return [];
    }
    n=parseInt(n);
    if(isNaN(n)){
        n=1;
    }
    return array.slice(n);
}

console.log(parseInt("0"));

console.log(drop([1, 2, 3]));
// => [2, 3]
 
console.log(drop([1, 2, 3], 2));
// => [3]
 
console.log(drop([1, 2, 3], 5));
// => []
 
console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]