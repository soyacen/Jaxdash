//此方法类似于_.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）。

function sortedLastIndex(array, value){
    if(!array || !Array.isArray(array) || array.length<=0){
        return -1;
    }
    let index=-1;
    for(let i=array.length-1;i>=0;i--)
    {
        if(array[i]<=value){
            index=i+1;
            break;
        }
    }
    return index;
}

console.log(sortedLastIndex([4, 5, 5, 5, 6], 5));
// => 4