//创建一个新数组，包含原数组中所有的非假值元素。
//例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。

function compact(array){
    if(!array || !Array.isArray(array) || array.length<=0){
        return [];
    }

    return array.filter(function (value){
        return !!value;
    });

}

console.log(compact([0, 1, false, 2, '', 3,null,6,undefined,8,NaN,9]));
