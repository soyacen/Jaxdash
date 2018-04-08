//创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（愚人码头注：可以理解为给定数组的交集）

function intersection(){
    let array=Array.prototype.slice.call(arguments);
    if(!array|| !Array.isArray(array)||array.length<=0){
        return [];
    }
    var counter=new Map();
    array.forEach(val=>{
        if(!Array.isArray(val)){
            return;
        }else{
            val.forEach(v=>{
                let k=JSON.stringify({v});
                if(counter.get(k)){
                    counter.set(k,counter.get(k)+1);
                }else{
                    counter.set(k,1);
                }
            })
        }
    });
    var result=[];
    for(var pair of counter)
    {
        if(pair[1]===array.length){
            result.push(JSON.parse(pair[0]).v);
        }
    }

    return result;
}

console.log(intersection([2, 1], [4, 2], [1, 2],2));
// => [2]