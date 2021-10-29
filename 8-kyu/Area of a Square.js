function squareArea(A) {
    let r = A * 360 / 2 / Math.PI / 90;
    return Number((r * r).toFixed(2));
}