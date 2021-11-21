function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder(n) {
    const arr = String(n).split('');
    return Number(arr.sort((a, b) => a - b).reverse().join(''));
}