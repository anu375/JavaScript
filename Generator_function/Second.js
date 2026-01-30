function* countUpTo() {
    for (let i = 0; i <= 5; i++) {

        yield i;

    }
}

const counter = countUpTo();

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());