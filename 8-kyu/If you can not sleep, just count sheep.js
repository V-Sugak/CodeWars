var countSheep = function (num) {
    let count = '';
    for (let i = 1; i <= num; i++) {
        count += String(i) + ' sheep...'
    }
    return count;
}