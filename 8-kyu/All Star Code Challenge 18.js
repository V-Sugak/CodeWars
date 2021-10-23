function strCount(str, letter) {
    return str.split('').filter(c => c == letter).length;
}

function strCount(str, letter) {
    let result = 0;
    if (str === '') { return 0 }
    else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == letter) {
                result++
            }
        }
        return result
    }
}