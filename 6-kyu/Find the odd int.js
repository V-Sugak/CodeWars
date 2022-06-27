function findOdd(A) {
    var obj = {};
    A.forEach(function (el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return Number(prop);
    }
}


function findOdd(A) {
    let numbers = {};
    for (let elem of A) {
        if (numbers[elem] === undefined) {
            numbers[elem] = 1
        } else {
            numbers[elem]++
        }
    }
    let arrKeys = Object.keys(numbers)
    let result = arrKeys.find(el => numbers[el] % 2 !== 0)
    return Number(result)
}