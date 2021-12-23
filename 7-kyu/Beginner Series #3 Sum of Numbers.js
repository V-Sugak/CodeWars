function GetSum(a, b) {
    if (a == b) return a;
    else if (a < b) return a + GetSum(a + 1, b);
    else return a + GetSum(a - 1, b);
}

function getSum(a, b) {
    let result = 0;
    if (a === b) { return a }
    else if (b > a) {
        for (let i = a; i <= b; i++) {
            result += i
        }
        return result;
    }
    else {
        for (let j = b; j <= a; j++) {
            result += j
        }
        return result;
    }
}