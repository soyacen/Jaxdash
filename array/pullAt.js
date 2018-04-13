// 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。 

function pullAt(array, ...indexes) {
    if (!array || !Array.isArray(array) || array.length <= 0 || indexes.length <= 0) {
        return [];
    }
    let index = -1;
    let result = [];
    indexes.sort();
    for (let i = indexes.length - 1; i >= 0; i--) {
        index = indexes.pop();
        if (index <= array.length) {
            result.unshift(array.splice(index, 1)[0]);
        }
    }
    return result;
}

var array = [5, 10, 15, 20];
var evens = pullAt(array, 1, 3);
 
console.log(array);
// => [5, 15]
 
console.log(evens);
// => [10, 20]