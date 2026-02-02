/**
 * Promise.all();
 * Promise.allSettled();
 * Promise.any();
 * Promise.race();
 */

let Prom1 = Promise.reject("Pass");

let Prom2 = Promise.resolve("Second Pass");

let Prom3 = Promise.reject("Error");


// Promise.all([Prom1, Prom2, Prom3])
//     .then((v) => {
//         console.log(v);
//         console.log("*");
//     })
//     .catch((e) => {
//         console.log(e);
//         console.log("g");
//     })


/**
 * Pass
 * g
 */

// Promise.allSettled([Prom1, Prom2, Prom3])
//     .then((v) => {
//         console.log(v);
//         console.log("*");
//     })
//     .catch((e) => {
//         console.log(e);
//         console.log("g");
//     })


/**
 *  [
 *   { status: 'rejected', reason: 'Pass' },
 *  { status: 'fulfilled', value: 'Second Pass' },
 *   { status: 'rejected', reason: 'Error' }
 *  ]
 *  *
 */


// Promise.any([Prom1, Prom2, Prom3])
//     .then((v) => {
//         console.log(v);
//         console.log("*");
//     })
//     .catch((e) => {
//         console.log(e);
//         console.log("g");
//     })

/**
 * Second Pass
 * *
 */


Promise.race([Prom1, Prom2, Prom3])
    .then((v) => {
        console.log(v);
        console.log("*");
    })
    .catch((e) => {
        console.log(e);
        console.log("g");
    })

/**
 * Pass
 * g
 */