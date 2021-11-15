function mergeArrays(arr1, arr2){
    return [...new Set([...arr1,...arr2])]
}

var array1 = [1, 2, 3, 4, 5];
var array2 = [4, 5, 6, 7, 8];
console.log(mergeArrays(array1, array2));