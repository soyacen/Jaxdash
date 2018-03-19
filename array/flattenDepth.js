//根据 depth 递归减少 array 的嵌套层级

function flattenDepth(array, depth = 1) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
        return [];
    }
    var result=[];
    function addItem(arr,dep){
        arr.forEach(element => {
            if(Array.isArray(element) && dep>0){
                addItem(element,dep-1);
            }else{
                result.push(element);
            }
        });
    }
    addItem(array,depth);
    return result;
}

var array = [1, [2, [3, [4]], 5]];
 
console.log(flattenDepth(array, 1));
// => [1, 2, [3, [4]], 5]
 
console.log(flattenDepth(array, 2));
// => [1, 2, 3, [4], 5]