function persistence(num) {
    var times = 0;

    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }

    return times;
}


function persistence(num) {
    let count = 1;
    if (num.toString().length > 1) {
        let arr = num.toString().split('').map(i => Number(i))
        let result = arr.reduce((a, b) => a * b, 1)
        while (result.toString().length > 1) {
            arr = result.toString().split('').map(i => Number(i))
            result = arr.reduce((a, b) => a * b, 1)
            count++
        }
        return count
    }
    else { return 0 }
}