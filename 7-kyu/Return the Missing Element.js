function getMissingElement(superImportantArray) {
    return superImportantArray.reduce(function (sum, value) { return sum - value; }, 45)
}


function getMissingElement(superImportantArray) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let a = arr.filter(i => !superImportantArray.includes(i))
    return a[0]
}
