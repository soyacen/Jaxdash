//使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

//这个方法会改变 array（不是创建新数组）。
function fill(array, value, start = 0, end) {

    if (!array || !Array.isArray(array)) return[];

    if (!end) {
        end = array.length;
    }
    for (var i = start; i < end; i++) {
        array[i] = value;
    }
    return array;
}

var array = [1, 2, 3];

fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

var arr=Array(3);
fill(arr, 2);
console.log(arr);
// => [2, 2, 2]

var ar=[4, 6, 8, 10];
fill(ar, '*', 1, 3);
console.log(ar);
// => [4, '*', '*', 10]