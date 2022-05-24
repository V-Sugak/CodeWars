function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

function maskify(cc) {
    const lengString = cc.length;
    if (lengString > 4) {
        let arr = cc.split('')
        for (let i = 0; i < (lengString - 4); i++) {
            arr[i] = '#'
        }
        return arr.join('')
    } else {
        return cc
    }
}