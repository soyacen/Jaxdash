//这个方法类似 _.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。
//结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。
function intersectionBy() {
    let iteratee = v => v;
    let array=[];
    let args=Array.prototype.slice.call(arguments);
    if ('function' === typeof args[args.length-1]) {
        array = args.slice(0,args.length-1);
        iteratee = args[args.length-1];
    } else if ('string' === typeof args[args.length-1]) {
        array = args.slice(0,args.length-1);
        let key = args[args.length-1];
        iteratee = obj => obj[key];
    }else if(Array.isArray(args[args.length-1])){
        array = args;
    }else{
        return [];
    }
    if (array.length <= 0 || !Array.isArray(array[0])) {
        return [];
    }
    const standArr=array[0].map(val=>iteratee(val));
    for(let i=1,len=array.length;i<len;i++){
        if(Array.isArray(array[i])){
            const tempArr=array[i].map(val=>iteratee(val));
            standArr.forEach((val,index) => {
                if(tempArr.indexOf(val)<0){
                    array[0][index]=undefined;
                }
            });
        }else{
            return [];
        }
    }
    return array[0].filter(val=>!!val);
}

console.log(intersectionBy([2.1, 1.2],[2.9], [4.3, 2.4], Math.floor));
// => [2.1]

// The `_.property` iteratee shorthand.
console.log(intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }],'x'));
// => [{ 'x': 1 }]