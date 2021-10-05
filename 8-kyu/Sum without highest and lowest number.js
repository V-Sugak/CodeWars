function sumArray(array) {
    if (array === null || array.length <= 1) { return 0 }
    else {
        let max = array[0];
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) { min = array[i] }
            else if (array[i] > max) { max = array[i] }
        }
        return array.reduce((prev, item) => prev + item) - min - max;
    }
}