async function getData() {
    const data = await new Promise(res =>
        setTimeout(() =>
            res("Data Loaded"), 1000));

    console.log(data);
}

getData();