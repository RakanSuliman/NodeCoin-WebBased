import BlockChain from "./Node";

class NodeCoin {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


 isEmpty() {
    return this.head === null;
}
    insert(node) {
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.nextHash = this.head;
            this.head.prevHash = node;
            this.head = node;
        }
        this.size += 1;
        return node;
    }
    getNodeByDate(date) {
        if (this.isEmpty()) { return null; }

   let current = this.head;
        while (current !== null) {
            if(current.getDate() === date) {
                return current;
            }
            current = current.next;
        }
        return null;
    }


    removeMaxTransaction(date) {
        const node = this.getNodeByDate(date);
        if (node && !node.heap.isEmpty()) {
            return node.heap.removeMax();
        }
        return null;
}
    getAllTransactions(date) {
        const node = this.getNodeByDate(date);
        if (!node || node.heap.isEmpty()) {
            return null;
        }
        const transactions = [];
        while (!node.heap.isEmpty()) {
            transactions.push(node.heap.removeMax());
        }
        if (node === this.head) {
            this.head = node.nextHash;
            if (this.head) {
                this.head.prevHash = null;
            }
        } else if (node === this.tail) {
            this.tail = node.nextHash;
            if (this.tail) {
                this.tail.nextHash = null;
            }
        } else {
            node.prevHash.nextHash = node.nextHash;
            node.nextHash.prevHash = node.prevHash;
        }
        this.size -= 1;
        return transactions;
    }
    getAll() {
        const nodes = [];
        let current = this.head;

        while (current !== null) {
            nodes.push({
                date: current.getDate(),
                maxTransactions: current.heap.getMax(),
                transactionCount: current.heap.currentSize
            });
            current = current.nextHash;
        }
        return nodes;
    }
}

export default NodeCoin;