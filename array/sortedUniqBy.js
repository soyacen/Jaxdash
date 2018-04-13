//这个方法类似 _.uniqBy，除了它会优化排序数组。
function sortedUniqBy(array, iteratee=v=>v){
    if(!array || !Array.isArray(array) || array.length<=0){
        return [];
    }
    return array.reverse().filter((val,i,arr)=>iteratee(val)!=iteratee(arr[i+1])).reverse();
}
console.log(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));
// => [1.1, 2.3]