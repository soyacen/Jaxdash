// 将 array 中的所有元素转换为由 separator 分隔的字符串。

function join(array, separator){
    if(!array || !Array.isArray(array)){
        return '';
    }
    return array.join(separator);
}

console.log(join(['a', 'b', 'c'], '~'));
