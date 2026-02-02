let Prom = Promise.reject("value not fullfilled");

Prom.catch((e) => {
    console.log(e);
})



let Prom1 = Promise.resolve("Value Fulfilled");

Prom1.then((t) => {
    console.log(t);
})