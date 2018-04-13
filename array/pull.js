// 移除数组array中所有和给定值相等的元素，使用 SameValueZero 进行全等比较。 

function pull(array, ...args){
    if(!array || !Array.isArray(array) || array.length<=0 || args.length<=0){
        return;
    }
    console.log(args);
    for(let i=0;i<array.length;i++){
        if(args.indexOf(array[i])>=0){
            array.splice(i,1);
            i--;
        }
    }
}

var array = [1, 2, 3, 1, 2, 3];
 
pull(array, 2, 3);
console.log(array);
// => [1, 1]
