//获取数组array中除了最后一个元素之外的所有元素（愚人码头注：去除数组array中的最后一个元素）。
function initial(array) {
    if (!array || !Array.isArray(array) || array.length <= 1) {
        return [];
    }
    return array.slice(0,array.length-1);
}



console.log(initial([1]));
// => [1, 2]