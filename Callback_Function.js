function greet(name, callback) {
    callback();
    console.log("Hello " + name);
}

greet("Anushka", function() {
    console.log("Good Morning");
});