const obj = {
    name: "Sweta",
    address: {
        city: "Mumbai"
    }
};

Object.freeze(obj);

console.log(Object.isSealed(obj));

obj.address.city = "Pune";

console.log(obj);