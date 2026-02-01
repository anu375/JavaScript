let promise = new Promise((resolve, reject) => {

    let success = true;

    if (success)
        resolve("Done");

    else
        reject("Error");

});

promise
    .then(res => console.log(res))
    .catch(err => console.log(err));