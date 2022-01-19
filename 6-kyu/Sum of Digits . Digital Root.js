function digital_root(n) {
    let arr = String(n).split('').map(i => Number(i));
    let number = arr.reduce((p, c) => p += c)
    if (number.toString().length === 1) {
        return number;
    } else {
        return digital_root(number);
    }
}