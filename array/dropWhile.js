//创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。
//predicate 会传入3个参数： (value, index, array)。

function dropWhile(array, predicate) {
  if (!array || !Array.isArray(array) || array.length <= 0) {
    return [];
  }
  if(!predicate){
    return array.concat();
  }
  var except;
  if (typeof predicate === 'function') {
    except = predicate;
  }else if(Array.isArray(predicate)){
    except = obj => {
      var flag=true;
      for(var i=0;i<predicate.length;i+=2){
        if(obj[predicate[i]] !== predicate[i+1])
        {
          flag=false;
        }   
      }
      return flag;
    }
  }else if (typeof predicate === 'object') {
    except = obj => {
      var flag=true;
      for( var key in obj){
        if(obj[key] !== predicate[key])
        {
          flag=false;
        }   
      }
      return flag;
    }
  }else if(typeof predicate==='string'){
    except=obj=>{
      return obj[predicate];
    }
  }else{
    return array.concat();
  }
  var exceptArr=[];
  array.forEach(function(obj,index){
    if(except(obj)){
      exceptArr.push(index);
    }
  });
  var start=0;
  exceptArr.forEach(function(value,index){
    if(value === index){
      start++;
    }else{
      return;
    }
  });
  return array.slice(start);
}

var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': true },
];

//console.log(dropWhile(users, function (o) { return !o.active; }));
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
//console.log(dropWhile(users, { 'user': 'barney', 'active': false }));
// => objects for [fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
//console.log(dropWhile(users, ['active', false]));
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
//console.log(dropWhile(users, 'active'));
// => objects for ['barney', 'fred', 'pebbles']

module.exports={
  dropWhile:dropWhile
};