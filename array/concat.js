//创建一个新数组，将array与任何数组 或 值连接在一起。
function concat(array){
    if(!array || !Array.isArray(array)|| array.length<=0){
        return [];
    }
    if(arguments.length<=1){
        return array.concat();
    }else{
        var args=Array.from(arguments);
        var arg= args.splice(1,1);
        args[0]=array.concat(arg);
        return concat.apply(this,args);
    }
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]

console.log(array.concat(2));