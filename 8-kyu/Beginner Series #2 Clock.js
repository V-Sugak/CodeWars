function past(h, m, s) {
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000
}


function past(h, m, s) {
    if (0 <= h <= 23) {
        h = h * 60 * 60 * 1000
    }
    if (0 <= m <= 59) {
        m = m * 60 * 1000
    }
    if (0 <= s <= 59) {
        s = s * 1000
    }
    return h + m + s
}