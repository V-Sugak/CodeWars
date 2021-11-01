function multiTable(number) {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }
    return table;
}


function multiTable(n) {
    let n1 = n;
    let n2 = n * 2;
    let n3 = n * 3;
    let n4 = n * 4;
    let n5 = n * 5;
    let n6 = n * 6;
    let n7 = n * 7;
    let n8 = n * 8;
    let n9 = n * 9;
    let n10 = n * 10;
    return `1 * ${n} = ${n1}\n2 * ${n} = ${n2}\n3 * ${n} = ${n3}\n4 * ${n} = ${n4}\n5 * ${n} = ${n5}\n6 * ${n} = ${n6}\n7 * ${n} = ${n7}\n8 * ${n} = ${n8}\n9 * ${n} = ${n9}\n10 * ${n} = ${n10}`
}