function repeatStr(n, s) {
    if (n === 1) { return s }
    else { return s + repeatStr(n - 1, s) }
}