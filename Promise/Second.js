let num = "1234567891";

const Prom = new Promise((Res, Rej) => {
    setTimeout(() => {
        if (num.length === 10) {
            return Res("Valid number");
        } else {
            return Rej("Invalid number...");
        }
    }, 9000);
})

function Print(V) {
    console.log(V);
}

Prom.then(Print).catch(Print);

setTimeout(() => {
    console.log(Prom);
}, 15000);