function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }
    return s.toFixed(2)
}


function SeriesSum(n) {
    let arr = [];
    for (let j = 1; j <= n; j++) {
        arr.push(1 / (1 + 3 * (j - 1)));
    }
    return String((arr.reduce((prev, cur) => { return prev += cur }, 0)).toFixed(2))
}