function timer() {
    let msg = "Hello Closure";

    setTimeout(function() {
        console.log(msg);
    }, 4000);
}

timer();