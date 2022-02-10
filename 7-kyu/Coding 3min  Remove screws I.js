function sc(screws) {
    const arr = screws.split('');
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count += 2;
        } else {
            count += 7
        }
    }
    return count;
}