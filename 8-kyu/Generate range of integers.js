function generateRange(min, max, step) {
    let arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}

function generateRange(min, max, step) {
    let arr = [];
    while (min <= max) {
        arr.push(min);
        min += step;
    }
    return arr;
}