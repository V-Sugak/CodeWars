function betterThanAverage(classPoints, yourPoints) {
    let result = classPoints.reduce((p, i) => p + i) / classPoints.length
    return yourPoints > result
}