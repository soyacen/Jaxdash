//这个方法类似 _.uniq，除了它会优化排序数组。

function sortedUniq(array){
    if(!array||!Array.isArray(array)||array.length<=0){
        return [];
    }
    return array.filter((val,i,arr)=>val!=arr[i+1]);
}

console.log(sortedUniq([1, 1, 2]));
// => [1, 2]