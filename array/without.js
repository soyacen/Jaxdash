//创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。

//注意: 不像 _.pull, 这个方法会返回一个新数组。

function without(array, ...values) {
  if (!array || !Array.isArray(array) || array.length <= 0) {
    return [];
  }
  return array.reduce((res,val)=>{
      if(values.indexOf(val)<0){
        res.push(val);
      }
      return res;
  },[]);
}

console.log(without([2, 1, 2, 3], 1, 2));
// => [3]
