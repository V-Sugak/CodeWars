function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

function getCount(str) {
    let arr = str.match(/[aeiou]/gi)
    return arr === null ? 0 : arr.length;
}
