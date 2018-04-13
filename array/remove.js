//移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。 

// 和 _.filter不同, 这个方法会改变数组 array。使用_.pull来根据提供的value值从数组中移除元素。

function remove(array, predicate=v=>!v){

    if(!array || !Array.isArray(array)|| array.length<=0){
        return [];
    }

    let result=[];
    for(let i=array.length-1;i>=0;i--){
        console.log(predicate(array[i]))
        if(predicate(array[i])){
            result.unshift(array.splice(i,1)[0]);
        }
    }
    return result;
}

var array = [1, 2, 3, 4];
var evens =remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]