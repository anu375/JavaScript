const employee = {

    id: 101,

    address: {
        city: "Mumbai",
        pincode: 400001
    }
};

console.log(employee);

delete employee.address.pincode;

console.log(employee);