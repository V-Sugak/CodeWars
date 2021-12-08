function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) { return -1 }
    else {
        let result = 0;
        for (let i = 0; i < a1.length; i++) {
            for (let j = 0; j < a2.length; j++) {
                if (Math.abs(a1[i].length - a2[j].length) > result) { result = Math.abs(a1[i].length - a2[j].length) }
            }
        }
        return result;
    }
}