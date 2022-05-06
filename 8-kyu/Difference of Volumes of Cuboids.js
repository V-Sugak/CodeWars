function findDifference(a, b) {
    return Math.abs(a.reduce((acc, i) => acc * i, 1) - b.reduce((acc, i) => acc * i, 1))
}
