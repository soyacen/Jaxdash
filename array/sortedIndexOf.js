// 这个方法类似 _.indexOf，除了它是在已经排序的数组array上执行二进制检索。

function sortedIndexOf(array, value){
    if(!array || !Array.isArray(array)|| array.length<=0){
        return -1;
    }
    let index=-1
    for(let i=0;i<array.length;i++){
        if(array[i]===value){
            index=i;
            break;
        }
    };
    return index;
}
console.log(sortedIndexOf([4, 5, 5, 5, 6], 5));
// => 1
console.log(sortedIndexOf([{x:9},{x:10},{x:13},{x:14}],{x:10}));