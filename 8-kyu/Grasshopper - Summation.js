var summation = function (num) {
    return (num > 1) ? num + summation(num - 1) : num;
}

var summation = function (num) {
    if (num < 1) { return 0 }
    else { return num + summation(num - 1) }
}
