//puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


//puzzle 2
let puzzleTwo = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]];



function getRow(puzzle, row) {
    let arr = puzzle [row];
    let checkRow = includes1To9(arr);
    if (checkRow != true)
    return arr;
    else 
    return arr;
}

function getColumn(puzzle, col) {
    let flatArr = [];
    let row = [];
    let x = [];
    for(i = 0; i < 9; i++) {
        row = puzzle[i];
        flatArr[i] = row[col];
    }
    return flatArr;
}

function getSection(puzzle, x, y) {
    let newArr = [];
    let row = [];
    if(y === 0) {
        for(let i = 0; i < 3; i++) {
            if(x === 0){
                for(let j = 0; j < 3; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
            if(x === 1){
                for(let j = 3; j < 6; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
            if(x === 2){
                for(let j = 6; j < 9; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
        }
    }
    if(y === 1) {
        for(let i = 3; i < 6; i++) {
            if(x === 0){
                for(let j = 0; j < 3; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
            if(x === 1){
                for(let j = 3; j < 6; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
            if(x === 2){
                for(let j = 6; j < 9; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
        }
    }
    if(y === 2) {
        for(let i = 6; i < 9; i++) {
            if(x === 0){
                for(let j = 0; j < 3; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
            if(x === 1){
                for(let j = 3; j < 6; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
            if(x === 2){
                for(let j = 6; j < 9; j++){
                    row = puzzle[i];
                    newArr.push(row[j]);
                }
            }
        }
    }
    let checkSection = includes1To9(newArr);
    return newArr;
}

function includes1To9(arr) {
    for(i = 0; i < 9; i++) {
        let j = 0;
        while (arr[j] != i+1) {
            if(j === 9)
            return false;
            j++;
        }
    }
    return true;
}

function sudokuIsValid(puzzle) {
    for (let i = 0; i < puzzle.length; i++) {
        let valid = getRow(puzzle, i);
        let ifValid;
        ifValid = includes1To9(valid);
        if (ifValid != true) {
        //console.log('getRow fail');
        return false;
        }
    }
    for (let i = 0; i < puzzle.length; i++) {
        let valid = getColumn(puzzle, i);
        let ifValid;
        ifValid = includes1To9(valid);
        if (ifValid != true) {
            //console.log("getCol fail");
            return false;
        }
    }
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++){
            let valid = getSection(puzzle, i, j);
            let ifValid;
            ifValid = includes1To9(valid);
            if (ifValid != true) {
                //console.log("getSection fail");
                return false;
            }  
        }
    }
    return true;
}

console.log(sudokuIsValid(puzzle));
