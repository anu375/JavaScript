async function getData() {
    console.log("Fetching data...");

    const result = await new Promise(resolve =>
        setTimeout(() =>
            resolve("Data received"), 2000));

    console.log(result);
}

getData();
console.log("Other Work");