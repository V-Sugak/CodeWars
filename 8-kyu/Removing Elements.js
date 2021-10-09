function removeEveryOther(arr) {
    let i = 1;
    while (i < arr.length) {
        arr.splice(i, 1);
        i++;
    }
    return arr
}