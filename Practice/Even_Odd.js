function evenOdd(arr) {
    return {
        even: arr.filter(n => n % 2 === 0),
        odd: arr.filter(n => n % 2 !== 0)
    };
}

console.log(evenOdd([1, 2, 3, 4, 5]));