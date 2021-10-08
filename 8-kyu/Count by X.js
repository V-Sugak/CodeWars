function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}


function countBy(x, n) {
    let z = [];
    let y = n * x
    for (y; y >= x; y--) {
        if (y % x === 0) {
            z.unshift(y);
        }
        else if (y === x) { z = [x] }
    }
    return z;
}