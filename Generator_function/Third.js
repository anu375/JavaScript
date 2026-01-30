function* fruits() {

    yield "Apple";
    yield "PineApple";
    yield "Mango";
    yield "Banana";

}

for (let fruit of fruits()) {
    console.log(fruit);
}