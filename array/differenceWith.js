
function differenceWith(array){
    if (!array || !Array.isArray(array) || array.length <= 0) {
        return [];
    }
    var except = arguments[1];
    if (!except  || !Array.isArray(except) || except.length <= 0) {
        return array.concat();
    }
    var comparator = arguments[2];
    if (!comparator || typeof comparator !== 'function') {
        comparator = (arrVal, othVal)=>arrVal===othVal;
    }
    return array.filter(function (value) {
        var flag=true;
        except.forEach(element => {
            console.log(comparator(value,element));
            if(comparator(value,element)){
                flag=false;
                return;
            }
        });
        return flag;
    });
}

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
function eq(arrVal, othVal){
    var flag=true;
    for( var key in arrVal){
        if(arrVal[key]!==othVal[key]){
            flag=false;
            break;
        }
    }
    return flag;
}

console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }],eq));
// => [{ 'x': 2, 'y': 1 }]