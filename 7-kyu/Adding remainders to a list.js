function solve(nums, div) {
    return nums.map(x => x + x % div)
}

function solve(nums, div) {
    return nums.map(n => {
        let c = n;
        if (n % div === 0) { return n }
        else {
            while (c % div !== 0)
                c--
        }
        return n - c + n
    })
}
