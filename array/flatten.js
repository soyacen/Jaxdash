//减少一级array嵌套深度。


function flatten(array){
    if(!array || !Array.isArray(array)|| array.length<=0){
        return [];
    }
    var result=[];
    array.forEach(val=>{
        if(Array.isArray(val)){
            val.forEach(val=>result.push(val));
        }else{
            result.push(val);
        }
    });
    return result;
}

console.log(flatten([1, [2, [3, [4]], 5]]));
