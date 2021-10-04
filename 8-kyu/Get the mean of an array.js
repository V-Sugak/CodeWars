function getAverage(marks) {
    return Math.floor(marks.reduce((prev, item) => prev + item) / marks.length)
}


function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return Math.floor(sum / marks.length)
}