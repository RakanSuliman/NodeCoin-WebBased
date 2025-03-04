class MaxHeap {
    constructor(capacity = 10) {
        if (capacity <= 0 || capacity > 10000) {
            throw new Error('Capacity must be between 1 and 10000');
        }
        this.capacity = capacity;
        this.transactions = Array(capacity + 1).fill(null);
        this.currentSize = 0;
    }

    isEmpty() {
        return this.capacity === 0;
    }

    swap(i, j) {
        [this.transactions[i], this.transactions[j]] = [this.transactions[j], this.transactions[i]];
    }

    swim(k) {
        while (k > 1 && this.transactions[k].compareTo(this.transactions[Math.floor(k / 2)]) > 0) {
            this.swap(k, Math.floor(k / 2));
            k = Math.floor(k / 2);
        }
    }


    sink(k) {
        while (2 * k <= this.currentSize) {
            let j = 2 * k // Left Child
            if (j < this.currentSize && this.transactions[j].compareTo(this.transactions[j + 1])) {
                j += 1; // Right Child
            }
            if (this.transactions[k].compareTo(this.transactions[j]) >= 0) {
                break;
            }
            this.swap(k, j);
            k = j;
        }
    }

    insert(transaction) {
        if (this.currentSize >= this.capacity) {
            throw new Error("Heap is at max capacity")
        }
        this.currentSize += 1;
        this.transactions[this.currentSize] = transaction;
        this.swim(this.currentSize);
    }

    removeMax() {
        if (this.isEmpty()) {
            throw new Error("Heap is empty")
        }
        const max = this.transactions[1];
        this.transactions[1] = this.transactions[this.currentSize];
        this.transactions[this.currentSize] = null;
        this.currentSize -= 1;
        if (this.currentSize > 0) {
            this.sink(1);
        }
        return max;
    }

    getMax() {
        if (this.isEmpty()) {
            return null;
        }
        return this.transactions[1];
    }
}

export default MaxHeap;

