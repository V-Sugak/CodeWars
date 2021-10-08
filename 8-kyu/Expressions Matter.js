function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c,
    );
}


function expressionMatter(a, b, c) {
    const num1 = a * (b + c);
    const num2 = a * b * c;
    const num3 = a + b * c;
    const num4 = (a + b) * c;
    const num5 = a * b + c;
    const num6 = a + b + c;
    let max = Math.max.apply(Math, [num1, num2, num3, num4, num5, num6])
    return max;
}