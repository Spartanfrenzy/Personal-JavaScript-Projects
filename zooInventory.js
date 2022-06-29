function zooInventory(newArr) {
    let name = [];
    let animal = [];
    let age = [];
    for(let i = 0; i < newArr.length; i++) {
         let who = newArr[i];
         name[i] = who[0];
         let animalInfo = who[1];
         animal[i] = animalInfo[0];
         age[i] = animalInfo[1];
    }
    let finalArr = [];
    for(let i = 0; i < newArr.length; i++) {
        finalArr.push(name[i] + ' the ' + animal[i] + ' is ' + age[i]); 
    }
    return finalArr;
}

console.log(zooInventory([
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ]));