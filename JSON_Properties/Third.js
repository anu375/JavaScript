const user = { name: "Shawrya" };

const details = { age: 22 };

const location = { city: "Nashik" };

const merged = Object.assign({}, user, details, location);

console.log(merged);