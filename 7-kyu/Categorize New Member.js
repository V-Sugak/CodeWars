function openOrSenior(data) {
    return data.map(d => d[0] > 54 && d[1] > 7 ? 'Senior' : 'Open')
}