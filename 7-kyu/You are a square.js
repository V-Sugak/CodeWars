const isSquare = n => Number.isInteger(Math.sqrt(n));



var isSquare = function (n) {
    return n < 0 ? false : (n === 0 ? true : n % (Math.sqrt(n)) === 0)
}