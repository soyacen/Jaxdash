//创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。

function uniq(array){
    if(!array || !Array.isArray(array) || array.length<=0){
        return [];
    }
    let result=[array[0]];
    for(let i=1;i<array.length;i++){
        let has=result.some(val=>array[i]===val);
        if(!has){
            result.push(array[i]);
        }
    }
    return result;
}

console.log(uniq([2, 1, 2]));
// => [2, 1]