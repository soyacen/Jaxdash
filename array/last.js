// 获取array中的最后一个元素。

function last(array){
    if(!array || !Array.isArray(array) || array.length <=0){
        return undefined;
    }
    return array[array.length-1];
}