function elevatorDistance(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        count += Math.abs(arr[i - 1] - arr[i])
    }

    return count
}