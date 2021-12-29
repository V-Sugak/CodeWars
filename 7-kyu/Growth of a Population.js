function nbYear(p0, percent, aug, p) {
    let count = p0 + p0 * percent / 100 + aug
    let result = 1;
    while (count < p) {
        count = count + count * percent / 100 + aug
        result++
    }
    return result;
}