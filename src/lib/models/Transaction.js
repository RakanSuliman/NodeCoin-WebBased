class Transaction {
    constructor(amount, transactionNum) {
        this.amount = amount;
        this.transactionNum = transactionNum;
    }

    compareTo(other) {
        if(!other) return 1;
        if (this.amount > other.amount) { return -1}
        if (this.amount < other.amount) return 1;
        return 0;
    }
}

export default Transaction;
