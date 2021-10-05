function fakeBin(x) {
    return x.split('').map(s => s >= 5 ? s = '1' : s = '0').join('');
}