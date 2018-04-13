//使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。


function sortedIndex(array, value){
    if(!array || !Array.isArray(array) || array.length<=0){
        return -1;
    }
    let index=-1;
    for(let i=0;i<array.length;i++)
    {
        if(array[i]>=value){
            index=i;
            break;
        }
    }
    return index;
}

console.log(sortedIndex([30, 50,60], 40));
// => 1