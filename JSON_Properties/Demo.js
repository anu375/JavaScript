const user = {
    name: "Sweta",
    age: "30",
    city: "Pune"
};

const result = Object.entries(user);

console.log(result); //-->o/p  [ [ 'name', 'Sweta' ], [ 'age', '30' ], [ 'city', 'Pune' ] ]

//console.log(user);    //-->o/p { name: 'Sweta', age: '30', city: 'Pune' }