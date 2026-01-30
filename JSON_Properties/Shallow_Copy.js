const obj = {
    name: "Shawrya",
    address: { city: "Nashik" }
};

const copy = Object.assign({}, obj);

copy.address.city = "Banglore";

console.log(obj.address.city);