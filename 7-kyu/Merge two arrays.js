function mergeArrays(a, b) {
    let j = [],
        longest = a.length > b.length ? a : b;
    for (var i = 0; i < longest.length; i++) {
        if (a[i]) j.push(a[i])
        if (b[i]) j.push(b[i])
    }
    return j
}



function mergeArrays(a, b) {
    let arr = [];
    if (a.length > b.length) {
        for (let i = 0; i < a.length; i++) {
            arr.push(a[i]);
            if (b[i] !== undefined) { arr.push(b[i]) };
        }
    }

    else if (a.length < b.length) {
        for (let i = 0; i < b.length; i++) {
            if (a[i] !== undefined) { arr.push(a[i]) };
            arr.push(b[i]);
        }
    }


    else {
        for (let i = 0; i < a.length; i++) {
            arr.push(a[i]);
            arr.push(b[i]);
        }
    }
    return arr
}