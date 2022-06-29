function evenAndOdd(array) {
    evenArr = [];
    oddArr = []; 
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) 
        evenArr.push(array[i]);
        else 
        oddArr.push(array[i]);
    }
    return [evenArr, oddArr];
}

console.log(evenAndOdd([1,2,3,4,5,6]));
