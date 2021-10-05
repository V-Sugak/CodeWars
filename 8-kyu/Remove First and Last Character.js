function removeChar(str) {
    return str.slice(1, -1);
};

function removeChar(str) {
    return str.replace(/^.|.$/g, "");
};

function removeChar(str) {
    return str.replace(/^\w/, '').replace(/\w$/, '')
};
