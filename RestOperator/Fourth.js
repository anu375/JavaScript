let product = {
    id: 1,
    name: "Mobile",
    price: 15000,
    brand: "Samsung"
};

let { price, ...details } = product;

console.log(details);