function powersOfTwo(n) {
    let arr = [];
    while (n >= 0) {
        arr.unshift(Math.pow(2, n));
        n--;
    }
    return arr
}