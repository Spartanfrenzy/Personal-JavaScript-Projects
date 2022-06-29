let multiplier = 1;
let price = 100;
function getSalesTax(cost, state){
    if (state === 'NY'){
        multiplier = 1.04
    } else if (state === 'CA'){
        multiplier = 1.0725
    }
    return cost * multiplier;
}
console.log(getSalesTax(price, 'CA'));