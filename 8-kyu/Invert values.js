function invert(array) {
    if (array.length <= 0) { return [] }
    else {
        return array.map(i => i *= (-1))
    }
}