const arr1 = [1,2,3,1];
const arr2 = [1,2,3,4];
const arr3 = [1,1,1,3,3,4,3,2,4,2];

function checkDuplicates(array){
    
    let arrayWithoutDuplicates = [...new Set(array)];

    if(arrayWithoutDuplicates.length != array.length){   
        return true
    } 
    else{
        return false
    } 
}

let arr_1 = checkDuplicates(arr1);
console.log(arr_1);

let arr_2 = checkDuplicates(arr2);
console.log(arr_2);

let arr_3 = checkDuplicates(arr3);
console.log(arr_3);
