//反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。 

function reverse(array){
    if(!array||!Array.isArray(array)||array.length<=0){
        return [];
    }
    return array.reverse();
}

var array = [1, 2, 3];
 
console.log(reverse(array));
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]