function spinWords(string) {
    let arr = string.split(' ');
    return arr.map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ');
}