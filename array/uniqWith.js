//这个方法类似 _.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。

function uniqWith(array, comparator=(arrVal, othVal)=>arrVal===othVal){
    if(!array || !Array.isArray(array) || array.length<=0){
        return [];
    }
    let result=[array[0]];
    for(let i=1;i<array.length;i++){
        let has=result.some(val=>comparator(array[i],val));
        if(!has){
            result.push(array[i]);
        }
    }
    return result;
}

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
console.log(uniqWith(objects, (arrVal,othVal)=>{
    for(var i in arrVal){
        if(arrVal[i]!=othVal[i]){
            return false;
        }
    }
    return true;
}));
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]