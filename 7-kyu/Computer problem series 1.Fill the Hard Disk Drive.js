function save(sizes, hd) {
    let result = 0;
    sizes.reduce((acc, curr) => {
        if ((acc += curr) <= hd) result += 1;
        return acc;
    }, 0);
    return result;
}

function save(sizes, hd) {
    let count = 0;
    let ind;
    for (let i = 0; i < sizes.length; i++) {
        if (count <= hd) {
            count += sizes[i]
            ind = i;
        }
        else { return i - 1 }
    }
    return sizes.length <= 1 && sizes[0] > hd ? 0 : ind + 1

}