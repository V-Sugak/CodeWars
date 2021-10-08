function squareSum(numbers) {
    return numbers.reduce(function (sum, n) {
        return (n * n) + sum;
    }, 0)
}

function squareSum(numbers) {
    let newArr = numbers.map(i => i * i);
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i]
    }
    return sum;
}