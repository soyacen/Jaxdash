//该方法是像 _.xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).

function xorWith(...args) {
    if (args.length <= 0) {
        return [];
    }
    var length = 0;
    var comparator = args[args.length - 1];
    if (typeof comparator !== 'function') {
        comparator = (arrVal, othVal) => arrVal === othVal;
        length = args.length;
    } else {
        if (args.length == 1) {
            return [];
        }
        length = args.length - 1;
    }
    let count=args.reduce((res,val)=>{
        val.forEach(ele=>{
            let item=null;
            res.forEach(e=>{
                if(comparator(e[0],ele)){
                    item=e;
                    item[1]++;
                }
            })
            if(item===null){
                res.push([ele,1]);
            }
        })
        return res;
    },[]);

    return count.reduce((res,ele)=>{
        if(ele[1]===1){
            res.push(ele[0]);
        }
        return res;
    },[]);
}

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]