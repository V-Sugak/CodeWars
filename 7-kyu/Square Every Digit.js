function squareDigits(num) {
    return Number(String(num).split('').map(i => i * i).join(''));
}