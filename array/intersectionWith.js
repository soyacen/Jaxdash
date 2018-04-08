//这个方法类似 _.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。

function intersectionWith(array,comparator){
    if(!array || !Array.isArray(array)|| array.length<=0){
        return [];
    }
    if(!comparator){
        comparator=(arrVal,othVal)=>arrVal===othVal;
    }
    const standArr=array.slice(0,1);
    const result=[];
    for (var i = 1, len = array.length - 1; i < len; i++) {
        if (!Array.isArray(array[i])) {
            return [];
        }
        for (var a = 0; a < array[i].length; a++) {

            for (var r = 0; r < standArr.length; r++) {
                if (comparator(standArr[r],array[i][a])){
                    result.push(standArr[r]);
                    break;
                }
            }
        }
        standArr=result;
    }
    return result;
}

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
console.log(intersectionWith([objects, others], _.isEqual));
// => [{ 'x': 1, 'y': 2 }]
