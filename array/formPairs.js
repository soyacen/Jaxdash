//这个方法返回一个由键值对pairs构成的对象。
function fromPairs(pairs){
    if(!pairs||!Array.isArray(pairs) || pairs.length<=0){
        return [];
    }
    var obj={};
    pairs.forEach(val=>{
        if(Array.isArray(val)){
            for(var i=0;i<val.length;i+=2){
                obj[val[i]]=val[i+1];
            }
        }
    });
    return obj;
}

console.log(fromPairs([['fred', 30], ['barney', 40,'age',10]]));
// => { 'fred': 30, 'barney': 40 }