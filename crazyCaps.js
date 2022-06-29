function crazyCaps(origninalString){
    let crazyString = '';
    for(let i = 0; i < origninalString.length; i++){
        let char = origninalString[i];
        if (i % 2 === 0){
            crazyString += char.toLowerCase();
        } else { crazyString += char.toUpperCase();
        }
    }
    return crazyString;
} 

console.log(crazyCaps('Hello World!'));
