//这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个参数： (value)。 [iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。

function pullAllBy(array, args, iteratee = v => v) {
    if(!array || !Array.isArray(array) || array.length<=0 || !args|| !Array.isArray(args) ||args.length<=0){
        return;
    }
    const key=iteratee;
    if (typeof iteratee === 'string') {
        iteratee = obj => obj[key];
    }
    for (let i = 0; i < array.length; i++) {
        if (args.some(val => {
                return iteratee(val) === iteratee(array[i])
            })) {
            array.splice(i, 1);
            i--;
        }
    }
}


var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]