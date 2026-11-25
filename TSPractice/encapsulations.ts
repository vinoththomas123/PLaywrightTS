class Bank {
    private balance: number = 0;

    getBalance() {
        return this.balance;
    }

    deposite(amount: number) {
        if (amount<0){
            throw new Error("Please enter valid amount")
        }
        this.balance = this.balance + amount;
    }

    withdraw (amount: number){
        this.balance = this.balance - amount
    }

}

let obj = new Bank()

obj.deposite(50000)

console.log(obj.getBalance());

obj.withdraw(10000)

console.log(obj.getBalance());



