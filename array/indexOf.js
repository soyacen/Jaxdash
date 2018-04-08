//使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。

function indexOf(array, value, fromIndex=0){
    if(!array|| !Array.isArray(array)||array.length<=0){
        return -1;
    }
    for(let i=fromIndex,len=array.length;i<len;i++){
        if(array[i]===value){
            return i;
        }
    }
    return -1;
}

console.log(indexOf([1, undefined, 1, 2]));
// => 1
 
// Search from the `fromIndex`.
console.log(indexOf([1, 2, 1, 2], 2, 1));
// => 3