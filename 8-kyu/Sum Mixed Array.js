function sumMix(x) {
    return x.reduce((sum, n) => sum + (+n), 0)
}



function sumMix(x) {
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'string') {
            x[i] = Number(x[i]);
        }
    }
    return x.reduce((prev, item) => prev + item);
}