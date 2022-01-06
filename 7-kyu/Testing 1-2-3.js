var number = function (array) {
    return array.map(function (line, index) {
        return (index + 1) + ": " + line;
    });
}

var number = function (array) {
    let arr = []
    if (array.length === 0) { return array }
    else {
        for (let id = 1, i = 0; i < array.length; id++, i++) {
            arr.push(`${id}: ${array[i]}`);
        }
        return arr;
    }
}