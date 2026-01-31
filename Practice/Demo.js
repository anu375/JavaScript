function countChars(str) {
    let obj = {};

    for (let ch of str) {
        obj[ch] = (obj[ch] || 0) + 1;
    }

    return obj;
}

console.log(countChars("Hello ! How Are You ?"));