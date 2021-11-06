var isSquare = function (arr) {
    let newArr = arr.find(i => Number.isInteger(Math.sqrt(i)) === false)
    return arr.length === 0 ? undefined : newArr === undefined
}