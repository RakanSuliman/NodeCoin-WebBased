import MaxHeap from "./MaxHeap";

class BlockChain {
    constructor(date, capactiy = 100) {
        this.date = this.formatDate(date)
        this.nextHash = null;
        this.prevHash = null;
        this.heap = new MaxHeap(capactiy);
        this.transactionCounter = 1;
    }

    formatDate(date) {
        if (typeof date === "string" && date.length === 7)  {
            return '0' + date;
        }
        return date;
    }


    getDate() {
    return this.date;
}
    setDate(date) {
        this.date = this.formatDate(date);
    }
}

export default BlockChain;