const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 1500);
});

promise.then(result => {
    console.log(result);
});

console.log("Waiting...");