let pincode = ['11011', 'Delhi'];

console.log(pincode);

console.log("******************");

let pins = {
    1011: "Delhi",
    22022: "Mumbai",
    1111: "Satara",
    1212: "Raygad",
    1414: "Saswad"
};
console.log(pins);

console.log("********************");


function Greet() {
    console.log("Hello,Human!");
}

Greet();

console.log("************************");

let pin = {
    "Greet": function() {
        console.log("Hello");
    }
};

pin.Greet();