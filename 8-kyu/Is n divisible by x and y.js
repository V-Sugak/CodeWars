function isDivisible(n, x, y) {
    let x1 = Number.isInteger(n / x)
    let y1 = Number.isInteger(n / y)
    return x1 && y1
}