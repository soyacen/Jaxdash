
function findIndex(array, predicate = v => v, fromIndex = 0) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
        return -1;
    }
    if (predicate === undefined || predicate === null) {
        return 0;
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
    for(var i=fromIndex;i<array.length;i++){
        if(func(array[i])){
            return i;
        }
    }
    return -1;
}

var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log(findIndex(users, function (o) { return o.user == 'barney'; }));
// => 0

// The `_.matches` iteratee shorthand.
console.log(findIndex(users, { 'user': 'fred', 'active': false }));
// => 1

// The `_.matchesProperty` iteratee shorthand.
console.log(findIndex(users, ['active', false]));
// => 0

// The `_.property` iteratee shorthand.
console.log(findIndex(users, 'active'));
  // => 2