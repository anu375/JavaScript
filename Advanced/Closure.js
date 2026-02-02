function UCO(z) {
    let bankbalance = z;

    function Checkbalance() {
        console.log("HII");

        console.log(bankbalance);
    }

    function Deposit(m) {
        console.log("deposit");

        bankbalance += m;

        console.log("new Balance : " + bankbalance);
    }

    function WithDraw(w) {
        if (bankbalance < w) {
            console.log("HELLO");
        }

        bankbalance = bankbalance - w;
        console.log("Amount withdrawn : " + w);
        console.log("New Bankbalance : " + bankbalance);
    }

    return [Checkbalance, Deposit, WithDraw];
}

let [a, b, c] = UCO(1010);

a();
b(1);
c(100);