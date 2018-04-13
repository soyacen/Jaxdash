
// 这个方法类似于 _.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。comparator 会传入两个参数：(arrVal, othVal)。 
function pullAllWith(array, args, comparator = (arrVal, othVal) => arrVal === othVal) {
    if (!array || !Array.isArray(array) || array.length <= 0 || !args || !Array.isArray(args) || args.length <= 0) {
        return;
    }
    for (let i = 0; i < array.length; i++) {
        if (args.some(val => comparator(val, array[i]))) {
            array.splice(i, 1);
            i--;
        }
    }
}

var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
pullAllWith(array, [{ 'x': 3, 'y': 4 }],(a,b)=>{
    for(let key in a){
        if(a[key]!==b[key]){
            return false;
        }
    }
    return true;
});
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]