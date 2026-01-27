function average(...nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length; //(10+20+30)/3 = 60/3 => 20
}

console.log(average(10, 20, 30));