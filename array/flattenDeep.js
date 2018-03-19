
function flattenDeep(array){
    if(!array || !Array.isArray(array)){
        return [];
    }
    var result=[];

    function addItem(array){
        array.forEach(element => {
            if(Array.isArray(element)){
                addItem(element);
            }else{
                result.push(element);
            }  
        });
    }
    addItem(array);
    return result;
}

console.log(flattenDeep([1, [2, [3, [4]], 5]]));