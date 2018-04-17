//这个方法类似 _.uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。

function uniqBy(array, iteratee = v => v) {
    if(!array || !Array.isArray(array) || array.length<=0){
        return [];
    }
    if(typeof iteratee === 'string'){
        const key=iteratee;
        iteratee=obj=>obj[key];
    }
    let result=[array[0]];
    for(let i=1;i<array.length;i++){
        let has=result.some(val=>iteratee(array[i])===iteratee(val));
        if(!has){
            result.push(array[i]);
        }
    }
    return result;


}


console.log(uniqBy([2.1, 1.2, 2.3], Math.floor));
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
console.log(uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'));
// => [{ 'x': 1 }, { 'x': 2 }]