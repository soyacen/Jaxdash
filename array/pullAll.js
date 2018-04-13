// 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。 

function pullAll(array, args){
    if(!array || !Array.isArray(array) || array.length<=0 || !args|| !Array.isArray(args) ||args.length<=0){
        return;
    }
    for(let i=0;i<array.length;i++){
        if(args.indexOf(array[i])>=0){
            array.splice(i,1);
            i--;
        }
    }
}

var array = [1, 2, 3, 1, 2, 3];
 
pullAll(array, [2, 3]);
console.log(array);
// => [1, 1]