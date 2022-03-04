function solve(s) {
    let arr = s.match(/[uoeai]+/g).map(i => i.length)
    return Math.max(...arr);
}