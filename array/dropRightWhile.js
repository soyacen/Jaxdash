//创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。
///predicate 会传入3个参数： (value, index, array)。

const  dropWhile = require('./dropWhile.js').dropWhile;

function dropRightWhile(array,predicate){
  var tmpArray=array.slice();
  return dropWhile(tmpArray.reverse(),predicate).reverse();
}

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
console.log(dropRightWhile(users, function(o) { return !o.active; }));
// => objects for ['barney']
 
// The `_.matches` iteratee shorthand.
console.log(dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
// => objects for ['barney', 'fred']
 
// The `_.matchesProperty` iteratee shorthand.
console.log(dropRightWhile(users, ['active', false]));
// => objects for ['barney']
 
// The `_.property` iteratee shorthand.
console.log(dropRightWhile(users, 'active'));
// => objects for ['barney', 'fred', 'pebbles']
