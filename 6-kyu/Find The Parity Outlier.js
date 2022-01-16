function findOutlier(int) {
    let even = int.filter(a => a % 2 == 0);
    let odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}

function findOutlier(integers) {
    let arr = integers.filter(i => i % 2 === 0);
    if (arr.length === 1) { return arr[0] }
    else {
        let arr1 = integers.filter(i => i % 2 !== 0)
        return arr1[0]
    }
}