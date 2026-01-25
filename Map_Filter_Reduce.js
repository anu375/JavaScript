const nums = [1, 2, 3, 4];

const squares = nums.map(n => n * n);

const even = nums.filter(n => n % 2 === 0);

const sum = nums.reduce((a, b) => a + b, 0);

console.log(squares, even, sum);