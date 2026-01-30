const obj = {
    name: "Sweta",
    address: {
        city: "Mumbai"
    }
};

Object.freeze(obj);
obj.address.city = "Pune";

console.log(obj);