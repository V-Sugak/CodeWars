function highAndLow(numbers) {
    let arr = numbers.split(' ');
    let max = Number(arr[0]);
    let min = Number(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) < min) { min = Number(arr[i]) }
        else if (Number(arr[i]) > max) { max = Number(arr[i]) }
    }
    return `${max} ${min}`
}

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
