//创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。

function xor(...arrays){
    if(arrays.length<=0){
        return [];
    }
    let count= arrays.reduce((res,val)=>{
        val.forEach(ele => {
            let item = null;
            res.forEach(val=>{
                if(ele===val[0]){
                    item=val;
                    item[1]++;
                }
            });
            if(item===null){
                res.push([ele,1]);
            }
        });
        return res;
    },[]);
    return count.filter(ele=>ele[1]===1).map(ele=>ele[0]);
}

console.log(xor([2, 1], [2, 3]));
// => [1, 3]

[2,2],[1,1],[3,1];