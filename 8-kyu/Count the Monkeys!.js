function monkeyCount(n) {
    let arr = [];
    for (let i = 1; n >= i; n--) {
        arr.unshift(n)
    }
    return arr;
}