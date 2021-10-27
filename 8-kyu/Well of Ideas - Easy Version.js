function well(x) {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' :
        good_count < 3 ? 'Publish!' : 'I smell a series!';
}

function well(x) {
    let result = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') { result++ }
    }
    return result <= 0 ? 'Fail!' : (result <= 2 ? 'Publish!' : 'I smell a series!')
}
