function hello(name) {
    if (name === undefined || name === "") { return "Hello, World!" }
    else if (name.length > 0) {
        return `Hello, ${name.toLowerCase().replace(name[0], name[0].toUpperCase())}!`
    }
}
