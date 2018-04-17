//这个方法类似 _.zipObject，除了它支持属性路径。

function zipObjectDeep(props, values) {
  if (!props || !Array.isArray(props) || props.length <= 0) {
    return {};
  }

  let result = {};
  for (let i = 0; i < props.length; i++) {
    let parent = result;
    let path = props[i].split(".");
    for (let j = 0, len = path.length; j < len; j++) {
      let key = path[j];
      if (/\[\w+\]$/.test(key)) {
        //数组
        let name = key.slice(0, key.indexOf('['));
        let index = key.slice(key.indexOf('[') + 1, key.indexOf(']'));
        let array = parent[name];
        if (!array) {
          array = parent[name] = [];
        }
        if (j === len - 1) {
          array[index] = values[i];
        } else {
          array[index] = {};
          parent = array[index];
        }
      } else {
        //对象
        if (j === len - 1) {
          parent[key] = values[i];
        } else {
          let obj = parent[key];
          if (!obj) {
            obj = parent[key] = {};
          }
          parent = obj;
        }
      }
    }
  }

  return result;
}

console.dir(zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2]));
let res = {
  a: {
    b: [{
        c: 1
      },
      {
        d: 2
      }
    ]
  }
};