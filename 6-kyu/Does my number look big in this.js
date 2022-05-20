function narcissistic(value) {
    const str = value.toString()
    let arr = str.split('').map(i => Math.pow(Number(i), str.length))
    return arr.reduce((acc, i) => acc + i) === value
}