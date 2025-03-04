import React, {useState} from 'react';
import Button from '../ui/Button';
import {formatDateForInput, formatDateForStorage} from "../../lib/utils/dateFormatter";


const TransactionForm = ({ onSubmit }) => {
    const [option, setOption] = useState('1');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleDateChange = (e) => {
        const htmlDate = e.target.value;
        if (htmlDate) {
            setDate(formatDateForStorage(htmlDate));
        } else {
            setDate('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!date) {
            setError('Please select a date');
            return;
        }

        if (option === '1' && (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0)) {
            setError('Please enter a valid amount greater than zero');
            return;
        }

        onSubmit({
            option,
            date,
            amount: option === '1' ? parseFloat(amount) : undefined
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-primary mb-1">Operation</label>
                <select
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                    className="w-full p-2 rounded bg-background border border-primary focus:border-primary-dark focus:outline-none"
                >
                    <option value="1">1 - Insert Transaction</option>
                    <option value="2">2 - Get Maximum Transaction</option>
                    <option value="3">3- Remove Maximum Transaction</option>
                    <option value="4">4- Get All Transactions</option>
                </select>
            </div>
            <div>
                <label className="block text-primary mb-1">Date</label>
                <input
                    type="date"
                    value={formatDateForInput(date)}
                    onChange={handleDateChange}
                    className="w-full p-2 rounded bg-background border border-primary focus:border-primary-dark focus:outline-none text-white"/>
            </div>
            {option === '1' && (
                <div>
                    <label className="block text-primary mb-1">Amount</label>
                    <input
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 rounded bg-background border border-primary focus:border-primary-dark focus:outline-none"/>
                </div>
            )}
            {error && (
                <div className="p-3 bg-red-900/50 border-red-700 rounded text-red-300">
                    {error}
                </div>
            )}
            <Button type="submit" className="w-full" variant="primary">
                Execute
            </Button>
        </form>
    );
};

export default TransactionForm;