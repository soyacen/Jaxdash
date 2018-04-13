//这个方法类似 _.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索。


function sortedLastIndexOf(array, value){
    if(!array || !Array.isArray(array)|| array.length<=0){
        return -1;
    }
    let index=-1
    for(let i=array.length-1;i>=0;i--){
        if(array[i]===value){
            index=i;
            break;
        }
    };
    return index;
}

console.log(sortedLastIndexOf([4, 5, 5, 5, 6], 5));
// => 3