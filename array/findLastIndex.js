//这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。

function findLastIndex(array, predicate = v => v, fromIndex){
    if (!array || !Array.isArray(array) || array.length <= 0) {
        return -1;
    }
    if (predicate === undefined || predicate === null) {
        return 0;
    }
    if(fromIndex===undefined || fromIndex===null){
        fromIndex=array.length-1;
    }
    var func;
    if (typeof predicate === 'function') {
        func = predicate;
    } else if (Array.isArray(predicate)) {
        func = val => {
            for (var i = 0; i < predicate.length; i += 2) {
                if (val[predicate[i]] !== predicate[i + 1]) {
                    return false;
                }
            }
            return true;
        }
    } else if (typeof predicate === 'object') {
        func = val => {
            for (var key in predicate) {
                if (val[key] !== predicate[key]) {
                    return false;
                }
            }
            return true;
        }
    } else if (typeof predicate === 'string') {
        func = val => val[predicate];
    }else{
        return -1;
    }
    for(var i=fromIndex;i>=0;i--){
        if(func(array[i])){
            return i;
        }
    }
    return -1;
}

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
   
console.log(findLastIndex(users, function(o) { return o.user == 'pebbles'; }));
  // => 2
   
  // The `_.matches` iteratee shorthand.
  console.log(findLastIndex(users, { 'user': 'barney', 'active': true }));
  // => 0
   
  // The `_.matchesProperty` iteratee shorthand.
  console.log(findLastIndex(users, ['active', false]));
  // => 2
   
  // The `_.property` iteratee shorthand.
  console.log(findLastIndex(users, 'active'));
  // => 0