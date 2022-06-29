function arrayFlattener(twodArr) {
    flatArr = [];
    for(i = 0; i < twodArr.length; i++) {
        element = twodArr[i];
        if(Array.isArray(element)) {
            for(j = 0; j < element.length; j++) {
                flatArr.push(element[j]);
            } } else { 
            flatArr.push(twodArr[i]);
        }
    }
    return flatArr;
}

console.log(arrayFlattener([1,[2,3],4]));
