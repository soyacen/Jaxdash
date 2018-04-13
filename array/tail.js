//获取除了array数组第一个元素以外的全部元素。



function tail(array){
    if(!array||!Array.isArray(array)||array.length<=0)return [];
    return array.slice(1);
}

console.log(tail([1, 2, 3]));
// => [2, 3]