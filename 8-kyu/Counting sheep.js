function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        arrayOfSheep[i] ? count += 1 : count;
    }
    return count
}