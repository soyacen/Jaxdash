//这个方法类似 _.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。

function sortedIndexBy(array, value, iteratee = v => v) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
        return -1;
    }
    if (typeof iteratee === 'string') {
        const key = iteratee;
        iteratee = obj => obj[key];
    }
    let index = -1;
    for(let i=0;i<array.length;i++){
        if (iteratee(array[i]) >= iteratee(value)) {
            index = i;
            break;
        }
    };
    return index;

}

var objects = [{ 'x': 4 }, { 'x': 5 }];
 
console.log(sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));
// => 0
 
// The `_.property` iteratee shorthand.
console.log(sortedIndexBy(objects, { 'x': 4 }, 'x'));
// => 0