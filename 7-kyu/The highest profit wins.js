function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

function minMax(arr) {
    const arr1 = arr.sort((a, b) => a - b)
    return [arr1[0], arr1[arr.length - 1]]; // fix me!
}