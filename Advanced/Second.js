/**
 * setTimeout();
 * setInterval();
 */



let tiid = setTimeout((v) => {
    console.log(v);

    clearTimeout(tiid);
}, 4000, ["alius", "jhon"]);