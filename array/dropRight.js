//创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

function drop(array,n=1){
    if(!array || !Array.isArray(array)|| array.length<=0){
        return [];
    }
    n=parseInt(n);
    if(isNaN(n)){
        n=1;
    }
    if(n>array.length){
        n=array.length;
    }
    return array.slice(0,array.length-n);
}


console.log(drop([1, 2, 3]));
// => [1,2]
 
console.log(drop([1, 2, 3], 2));
// => [1]
 
console.log(drop([1, 2, 3], 5));
// => []
 
console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]