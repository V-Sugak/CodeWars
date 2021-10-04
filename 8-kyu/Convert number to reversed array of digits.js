function digitize(n) {
    let arr = n.toString().split('').reverse();
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    return arr;
}