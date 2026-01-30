const user1 = {
    name: "Sofiya",
    age: 22
};

Object.seal(user1);

user1.age = 23;

user1.city = "Pune";

delete user1.name;

console.log(user1);