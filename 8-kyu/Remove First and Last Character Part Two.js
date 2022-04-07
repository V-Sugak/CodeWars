function array(arr) {
    const array = arr.split(',')
    return array.length < 3 ? null : arr.split(',').slice(1, array.length - 1).join(' ')
}