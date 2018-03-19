//将数组（array）拆分成多个 size 长度的区块，
//并将这些区块组成一个新数组。 
//如果array 无法被分割成全部等长的区块，
//那么最后剩余的元素将组成一个区块。
function chunk(array,size=1){
    if(!array||!Array.isArray(array)||array.length<=0){
        return [];
    }else{
        var result=[];
        var i=0;
        while(true){
            result.push(array.slice(i,size+i));
            i+=size;
            if(i>=array.length){
                break;
            }
        }
        return result;
    }
}

console.log(chunk(['dasdsadsa','das',['dsa','dsad']],10));

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]
 
console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]