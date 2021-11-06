function stray(numbers) {
    return numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num))[0]
}

function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
}

function stray(numbers) {
    let arr = numbers.filter(i => i === numbers[0])
    let arr1 = numbers.filter(i => i !== numbers[0])
    return arr.length === 1 ? numbers[0] : arr1[0]
}