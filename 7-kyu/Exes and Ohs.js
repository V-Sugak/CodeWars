function XO(str) {
    let arr = str.toLowerCase().split('')
    let arr1 = arr.filter(i => i === 'o')
    let arr2 = arr.filter(i => i === 'x')
    return arr1.length === arr2.length

}