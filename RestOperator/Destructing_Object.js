let user = {
    name: "Anushka",
    age: 21,
    city: "Pune"
};

let { name, ...details } = user;

console.log(name);
console.log(details);