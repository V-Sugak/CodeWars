function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function sumOfDifferences(arr) {
    if (arr.length == 0) {
        return 0
    }
    arr.sort((a, b) => a - b)
    return arr[arr.length - 1] - arr[0]
}