function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}

function arrayDiff(a, b) {
    let arr = [...a];
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            arr = arr.filter(j => j !== b[i]);
        }
    }
    return a.length === 0 ? [] : (b.length === 0 ? a : arr);
}
