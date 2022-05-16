function sevenAte9(str) {
    return str.replace(/79(?=7)/g, '7');
}

function sevenAte9(str) {
    let arr = str.split('')

    for (let i = 1; i < str.length; i++) {
        if (arr[i - 1] === '7' && arr[i + 1] === '7' && arr[i] === '9') {
            arr[i] = ''
        }
    }

    return arr.join('')
}