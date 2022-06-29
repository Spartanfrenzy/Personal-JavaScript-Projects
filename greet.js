let name = 'Joe';

function greetByDefault(firstName, lastName){
    let fullName = firstName + lastName;
    if(lastName === undefined){
        lastName = "Doe";
    }
    return 'Hi' + ' ' + firstName + ' ' + lastName + '!';
}

console.log(greetByDefault('John'));