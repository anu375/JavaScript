//Array Copy

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

console.log("*******************");

//Merge Arrays

let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c);

console.log("********************");

//Object copy and Merge

let user = { name: "Shawrya", age: 22 };
let newUser = {...user, city: "Nashik" };
console.log(newUser);