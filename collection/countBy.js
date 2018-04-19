//创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（愚人码头注：迭代次数）。 iteratee 调用一个参数：(value)。

function countBy(collection, iteratee = v => v) {
    collection=Array.from(collection);
    if(typeof iteratee === 'string'){
        const prop=iteratee;
        iteratee=v=>v[prop];
    }
    return collection.reduce((res,val)=>{
        let key=iteratee(val);
        console.log(key);
        if(res[key]){
            res[key]++;
        }else{
            res[key]=1;
        }
        return res;
    },{});
}


console.log(countBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.
console.log(countBy(['one', 'two', 'three'], 'length'));
// => { '3': 2, '5': 1 }
