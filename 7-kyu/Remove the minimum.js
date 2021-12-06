function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

function removeSmallest(numbers) {
    const j = numbers.indexOf(numbers.find(n => n === Math.min(...numbers)))
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i !== j) { arr.push(numbers[i]) }
    }
    return arr;
}