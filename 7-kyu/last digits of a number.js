function lastDigit(n, d) {
    let arr = String(n).split('').map(n => Number(n));
    if (arr.length < d) { return arr }
    if (d <= 0) { return [] }
    else { return arr.slice(-d) }
}