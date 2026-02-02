const Prom = new Promise((Resolve, Reject) => {
    let v = 10;

    setTimeout(() => {

        if (v > 50) {
            return Resolve("Promise resolved : " + v);
        } else {
            return Reject("small value");
        }
    }, 6000)
})

Prom.then((v) => {
    console.log(v);
}).catch((e) => {
    console.log(e);
})

console.log(Prom);

setTimeout(() => {
    console.log(Prom);
}, 8000);