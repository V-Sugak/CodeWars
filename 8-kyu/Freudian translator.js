function toFreud(string) {
    return string.replace(/\S+/g, 'sex');
}

function toFreud(string) {
    let arr = [];
    if (string === '') { return '' }
    else {
        for (let i = string.split(' ').length; i > 0; i--) {
            arr.push("sex");
        }
        return arr.join(' ');
    }
}