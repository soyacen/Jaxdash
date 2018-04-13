//从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。

function takeWhile(array, predicate = (v, i, arr) => v) {
  if (!array || !Array.isArray(array) || array.length <= 0) {
    return [];
  }
  var except;
  if (typeof predicate === "function") {
    except = predicate;
  } else if (Array.isArray(predicate)) {
    except = obj => {
      var flag = true;
      for (var i = 0; i < predicate.length; i += 2) {
        if (obj[predicate[i]] !== predicate[i + 1]) {
          flag = false;
        }
      }
      return flag;
    };
  } else if (typeof predicate === "object") {
    except = obj => {
      var flag = true;
      for (var key in obj) {
        if (obj[key] !== predicate[key]) {
          flag = false;
        }
      }
      return flag;
    };
  } else if (typeof predicate === "string") {
    except = obj => {
      return obj[predicate];
    };
  } else {
    return array.concat();
  }
  return array.reduce(function(res, v, i, arr) {
    if (i > 0 && res.length <= 0) {
      return [];
    }
    if (except(v)) {
      res.push(v);
    }
    return res;
  }, []);
}

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true }
];

console.log(
  takeWhile(users, function(o) {
    return !o.active;
  })
);
// => objects for ['barney', 'fred']

// The `_.matches` iteratee shorthand.
console.log(takeWhile(users, { user: "barney", active: false }));
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(takeWhile(users, ["active", false]));
// => objects for ['barney', 'fred']

// The `_.property` iteratee shorthand.
console.log(takeWhile(users, "active"));
// => []
