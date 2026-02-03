async function getData() {
    return "Data received";
}

async function main() {
    const result = await getData();
    console.log(result);
}

main();