function twoOldestAges(ages) {
    return ages.sort(function (a, b) { return a - b; }).slice(-2);
}

function twoOldestAges(ages) {
    let arr = ages.sort((a, b) => a - b);
    return [arr[arr.length - 2], arr[arr.length - 1]];
}