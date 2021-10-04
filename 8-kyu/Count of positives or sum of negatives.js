function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) { return [] }
    else {
        let negative = 0;
        let positives = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                positives++;
            } else if (input[i] < 0) {
                negative += input[i];
            }
        }
        return [positives, negative]
    }
} 