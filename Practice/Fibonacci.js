function fibonacci(n) {
    let a = 0,
        b = 1;

    for (let i = 1; i <= n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

fibonacci(5);