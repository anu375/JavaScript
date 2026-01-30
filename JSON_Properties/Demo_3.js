const user = {
    name: "Shawrya",
    profession: "Software Developer"
};

Object.freeze(user);

user.profession = "Teacher";
user.city = "Pune";
delete user.name;

console.log(user);