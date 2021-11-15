function arraySum(arr){
    let total = 0;
    for(let element of arr){
        if(typeof element === "number")
        total += element;
    }
    return total;
}

function arrayProduct(arr){
    let product = 0;
    for(let element of arr){
        if(typeof element === "number")
        product *= element;
    }
    return product;
}

function sumAndProduct(arr){
    console.log("sum of " + arr + " is " + arraySum(arr) + ", product is " + arrayProduct(arr) + ".");
}

var array = [1, 2, 3, 4, 5];
sumAndProduct(array);