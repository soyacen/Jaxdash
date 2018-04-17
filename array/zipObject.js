//这个方法类似 _.fromPairs，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。

function zipObject(props, values) {
  if (!props || !Array.isArray(props) || props.length <= 0) {
    return {};
  }
  return props.reduce((obj, prop, i) => {
    obj[prop] = values[i];
    return obj;
  }, {});
}

console.log(zipObject(["a", "b"], [1, 2]));
// => { 'a': 1, 'b': 2 }
