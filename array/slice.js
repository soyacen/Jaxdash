//裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。 
function slice(array, start=0, end){
    if(!array || !Array.isArray(array) || array.length<=0){
        return [];
    }
    return array.slice(start,end);
}