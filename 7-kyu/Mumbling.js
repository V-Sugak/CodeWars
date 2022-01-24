function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}



function accum(s) {
    const arr = s.toLowerCase().split('');
    let str = arr[0].toUpperCase();
    for (let i = 1; i < arr.length; i++) {
        str += '-' + arr[i].toUpperCase() + arr[i].repeat(i);
    }
    return str
}
