//）
//该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。 
//注意: 不像 _.pullAll，这个方法会返回一个新数组。
function difference(array){
    if(!array || !Array.isArray(array) || array.length<=0){
        return [];
    }
    var except=Array.from(arguments).slice(1);
    if(!except || except.length<=0){
        return array.concat();
    }
   return array.filter(function(value){
        return except.indexOf(value) < 0;
    });
}






console.log(difference([3, 2, 1],1,2,8));
// => [3, 1]